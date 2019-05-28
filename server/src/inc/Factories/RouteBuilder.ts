import TrainRoute from '../objects/TrainRoute';
import { SignalStrategy } from './SignalStrategy';
import { logger } from '../../webSocetServer';
import {
    Message,
    MESSAGE_ACTION_DUMP,
    MESSAGE_ACTION_STATE_UPDATE,
    TrainRouteBufferItem,
} from '../../definitions/interfaces';
import { connection } from 'websocket';

export const routeBuilder = new class {
    private readonly LOGGER_ENTITY = 'route-builder';

    private locked: boolean = false;

    private buffer: TrainRouteLock[] = [];

    public addToBuffer(trainRoute: TrainRoute): void {
        const routeLock = new TrainRouteLock(trainRoute);
        this.buffer.push(routeLock);
        this.printBuffer();
        this.tryBuild();
    }

    public printBuffer(): void {
        logger.log(this.dumpBuffer());
    }

    public printBufferSingle(connection: connection): void {
        logger.logSingle(this.dumpBuffer(), connection);
    }

    private dumpBuffer(): Message {
        return {
            id: 0,
            date: new Date(),
            action: MESSAGE_ACTION_DUMP,
            entity: this.LOGGER_ENTITY,
            data: this.buffer.map((routeLock): TrainRouteBufferItem => {
                return {
                    id: routeLock.getId(),
                    state: routeLock.state,
                    name: routeLock.route.name,
                };
            }),
        };
    }

    private async build(routeLock: TrainRouteLock) {
        const trainRoute = routeLock.route;
        routeLock.state = routeLock.STATE_BUILDING;
        this.printBuffer();

        try {
            const pointPositions = trainRoute.getPointPositions();
            for (const id in pointPositions) {
                const pointPosition = pointPositions[id];
                await pointPosition.lock(routeLock.getId());
            }

            const sectors = trainRoute.getSectors();
            for (const id in sectors) {
                const sector = sectors[id];
                sector.lock(routeLock.getId());
            }
            trainRoute.startSignal.state = SignalStrategy.calculate(trainRoute.endSignal, trainRoute.speed, true);
            routeLock.state = routeLock.STATE_BUILT;
            this.printBuffer();
        }

        catch (e) {
            this.rollBack(trainRoute);
        }


    }

    private async tryBuild(): Promise<void> {
        if (this.locked) {
            return;
        }
        if (!this.buffer.length) {
            return;
        }

        this.locked = true;

        const routeLock = this.findFirstNotBuiltRoute();

        this.printBuffer();

        const trainRoute = routeLock.route;

        const pointPositions = trainRoute.getPointPositions();
        try {
            for (const id in pointPositions) {
                const pointPosition = pointPositions[id];
                pointPosition.check()

            }
        } catch (e) {
            logger.log({
                id: 0,
                date: new Date(),
                entity: this.LOGGER_ENTITY,
                action: 'error',
                data: e.message,
            });
            return;
        }

        await this.build(routeLock);

        this.locked = false;
        this.tryBuild();
    }

    private findFirstNotBuiltRoute(): TrainRouteLock {
        const routes = this.buffer.filter((lock) => {
            return lock.state === lock.STATE_WAITING;
        });
        if (routes.length) {
            return routes[0];
        }
        return null;
    }

    public rollBack(trainRoute: TrainRoute) {
    }

};

class TrainRouteLock {
    public readonly route: TrainRoute;
    private readonly id: number;
    public state: string;

    public readonly STATE_WAITING = 'waiting';
    public readonly STATE_BUILDING = 'building';
    public readonly STATE_BUILT = 'built';

    constructor(route: TrainRoute) {
        this.route = route;
        this.id = (new Date()).getTime();
        this.state = this.STATE_WAITING;

        logger.log({
            date: new Date(),
            action: 'create',
            entity: 'locker',
            id: this.id,
            data: null,
        });
    }

    public getId(): number {
        return this.id;
    }
}
