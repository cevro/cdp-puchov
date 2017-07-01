import {signals} from '../../data/signals/index';
import {obvody} from '../../data/Obvody';
import {trainRoutes} from '../../data/train-routes/index';
import {SIGNAL_TYPE} from '../objects/signal/signal';
import {TRAIN_ROUTE_TYPE} from '../objects/tran-route/train-route';
import {SECTOR_TYPE} from '../objects/sector/sector';
import {ROUTE_BUILD} from '../../consts/events/index';

const trainRouteClientResponse = (data) => {
    trainRoutes.map((route) => {
        if (data.name == route.getName()) {
            switch (data.act) {
                case 'build':
                    return route.emit(ROUTE_BUILD);
                case 'hard_down':
                    return route.emit('ROUTE_HARD_DOWN');

                default:
            }
        }
    });
};


export const handelWebSocketReceive = (data, connection) => {
    switch (data.type) {
        case SIGNAL_TYPE:
            signals.map((signal) => {
                if (data.name == signal.getName()) {
                    signal.setStatus(data.status);
                }
            });
            break;
        case SECTOR_TYPE:
            obvody.map((obvod) => {
                if (data.name == obvod.getName()) {
                    obvod.changeStatus(data.status);
                }
            });
            break;
        case TRAIN_ROUTE_TYPE:
            trainRouteClientResponse(data);

            break;
        default:
            console.warn('no type match')
    }
};

export const initClientData = (connection) => {
    signals.map((signal) => signal.sendStatus(connection));
    obvody.map((obvod) => obvod.sendStatus(connection));
    trainRoutes.map((cesta) => cesta.sendStatus(connection));
    connection.send(JSON.stringify({
        type: 'available_routes', 'routes': trainRoutes.map((route) => {
            return {
                id: route.getID(),
                signalFrom: route.getSignalFrom().getID(),
                signalTo: route.getSignalTo().getID(),
            };
        })
    }));
};