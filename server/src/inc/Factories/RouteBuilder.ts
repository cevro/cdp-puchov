import {logger} from '../../webSocetServer';
import {
    BuildOptions,
    MESSAGE_ACTION_DUMP,
    TrainRouteBufferItem,
    TrainRouteDump,
} from '../../../../definitions/interfaces';
import {NAVEST_STOJ} from '../../consts/signal/signals';
import {STATUS_BUSY} from '../../consts/obvod/status';
import TrainRouteLock from '../objects/Routes/TrainRouteLock';
import {
    LocoNetMessage,
    MessageReciever,
} from './DateReceiver';
import {Message} from '../../../../definitions/messages';

class RouteBuilder implements MessageReciever {
    private readonly LOGGER_ENTITY = 'route-builder';

    private _locked: boolean = false;

    private buffer: TrainRouteLock[] = [];

    private hasError: boolean;

    public addToBuffer(trainRouteId: number, buildOptions: any): void {
        const routeLock = new TrainRouteLock(trainRouteId, buildOptions);
        this.buffer.push(routeLock);
        this.printBuffer();
        this.tryBuild();
    }

    private get locked(): boolean {
        return this._locked;
    }

    private set locked(value: boolean) {
        this._locked = value;
        this.printBuffer();
    }

    public printBuffer(): void {
        logger.log({
            id: 0,
            date: new Date(),
            action: MESSAGE_ACTION_DUMP,
            entity: this.LOGGER_ENTITY,
            data: this.dumpBuffer(),
        });
    }

    public dumpBuffer(): TrainRouteDump {
        return {
            buffer: this.buffer.map((routeLock): TrainRouteBufferItem => {
                return routeLock.dumpData();
            }),
            hasError: this.hasError,
            locked: this.locked,
        }
    }

    private async build(routeLock: TrainRouteLock) {
        if (this.hasError) {
            return;
        }
        await routeLock.build(this);
    }

    private async tryBuild(): Promise<void> {
        if (this.hasError || this.locked) {
            return;
        }

        const routeLock = this.findFirstNotBuiltRoute();
        if (!routeLock) {
            return;
        }

        this.locked = true;

        if (!routeLock.check()) {
            this.locked = false;
            return;
        }

        await this.build(routeLock);

        this.locked = false;

        this.refreshRoutes();
        this.tryBuild();
    }

    private findFirstNotBuiltRoute(): TrainRouteLock {
        const routes = this.buffer.filter((lock) => {
            return lock.state === TrainRouteLock.STATE_WAITING;
        });
        if (routes.length) {
            return routes[0];
        }
        return null;
    }

    public refreshRoutes() {
        for (let i = 0; i < this.buffer.length; i++) {
            this.buffer.forEach((locker) => {
                this.refreshRoute(locker);
            });
        }
    }

    private handleRequest(message: Message<{ id: number, buildOptions: BuildOptions }>) {
        switch (message.action) {
            case 'build':
                return this.addToBuffer(message.data.id, message.data.buildOptions);
        }
    }

    public handleLocoNetReceive(data: LocoNetMessage) {
    }

    public handleMessageReceive(message: Message): void {
        if (message.entity !== 'route-builder') {
            return;
        }
        this.handleRequest(message);

        this.refreshRoutes();
        this.tryBuild();
    }

    private refreshRoute(locker: TrainRouteLock) {
        if (locker.state !== TrainRouteLock.STATE_BUILT) {
            return;
        }
        const trainRoute = locker.route;
        if (this.hasError) {
            trainRoute.startSignal.changeState(NAVEST_STOJ);
            return;
        }

        const sectors = locker.route.getSectors();

        let isFree = true;
        for (const id in sectors) {
            const sector = sectors[id];
            isFree = isFree && sector.isFreeAndAllocated(locker.getId());
        }
        if (isFree) {
            trainRoute.recalculateSignal(locker.buildOptions);
            return;
        } else {
            locker.route.startSignal.changeState(NAVEST_STOJ);

            let busyIndex = 0;
            for (const index in sectors) {
                const sector = sectors[index];
                /* if (sector.isFreeAndAllocated(locker.getId())) {
                     this.handleError('');
                 }*/
                if (sector.state === STATUS_BUSY) {
                    // posledný sektor znamená zhodenie VC
                    if (sector.id === trainRoute.endSector.id) {
                        this.destroyRoute(locker);
                    }
                    busyIndex = +index;
                    break;
                }

            }
            /*
            for (let i = 0; i < busyIndex; i++) {
                if (sectors[i].locked == locker.getId()) {
                    console.log('Error');
                    return;
                }
            }*/
            const unalockIndex = busyIndex - 1;
            if (sectors.hasOwnProperty(unalockIndex)) {
                if (sectors[unalockIndex].locked == locker.getId()) {
                    locker.route.turnoutPositions.forEach((pointPosition) => {
                        pointPosition.unlockBySector(locker.getId(), sectors[unalockIndex].id);
                    });
                    sectors[unalockIndex].unlock(locker.getId());
                }
            }
        }

    }

    public handleError(message: string) {
        this.hasError = true;
        console.log('route builder hadle error');
        this.refreshRoutes();
    }

    public destroyRoute(locker: TrainRouteLock) {
        locker.destroyRoute();

        this.buffer = this.buffer.filter((bufferLock) => {
            return locker.getId() !== bufferLock.getId();
        });
        this.printBuffer();
    }

}

export const routeBuilder = new RouteBuilder();
