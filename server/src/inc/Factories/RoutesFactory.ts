import TrainRoute from '../objects/TrainRoute';
import { routes } from '../../data/puchov/routes/1L';
import { Message } from '../../../../definitions/interfaces';
import { RouteFinderRequest } from '../../definitions/interfaces';
import { logger } from '../../webSocetServer';
import { DataRecierver } from './DateReceiver';

class RoutesFactory implements DataRecierver {
    private readonly routes: TrainRoute[];

    constructor() {
        this.routes = routes.map((def) => {
            return new TrainRoute(def);
        });
    }

    public findRoute(startSignalId: number, endSectorId: number): TrainRoute[] {
        return this.routes.filter((route) => {
            return (route.startSignal.id === startSignalId) && (route.endSector.id === endSectorId);
        });
    }

    public findById(id: number): TrainRoute {
        for (const i in this.routes) {
            if (id == this.routes[i].id) {
                return this.routes[i];
            }
        }
        return null;
    }

    private handelFindRoute(message: Message<{ startSignalId: number, endSectorId: number }>): void {
        const data: RouteFinderRequest = message.data;
        const routes = this.findRoute(data.startSignalId, data.endSectorId);
        logger.log({
            date: new Date(),
            id: 0,
            entity: 'route-finder',
            action: 'found',
            data: {routes},
        });
    }

    public dataReceive(message: Message): void {
        if (message.entity !== 'route-finder') {
            return;
        }
        switch (message.action) {
            case 'find':
                return this.handelFindRoute(message);
        }
    }
}

export const routesFactory = new RoutesFactory();
