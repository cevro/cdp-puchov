"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../data/signals/index");
var Obvody_1 = require("../../data/Obvody");
var index_2 = require("../../data/train-routes/index");
var signal_1 = require("../objects/signal/signal");
var train_route_1 = require("../objects/tran-route/train-route");
var sector_1 = require("../objects/sector/sector");
var index_3 = require("../../consts/events/index");
var trainRouteClientResponse = function (data) {
    index_2.trainRoutes.map(function (route) {
        if (data.name == route.getName()) {
            switch (data.act) {
                case 'build':
                    return route.emit(index_3.ROUTE_BUILD);
                case 'hard_down':
                    return route.emit('ROUTE_HARD_DOWN');
                default:
            }
        }
    });
};
exports.handelWebSocketReceive = function (data) {
    switch (data.type) {
        case signal_1.SIGNAL_TYPE:
            index_1.signals.map(function (signal) {
                if (data.name == signal.getName()) {
                    signal.setStatus(data.status);
                }
            });
            break;
        case sector_1.SECTOR_TYPE:
            Obvody_1.obvody.map(function (obvod) {
                if (data.name == obvod.getName()) {
                    obvod.changeStatus(data.status);
                }
            });
            break;
        case train_route_1.TRAIN_ROUTE_TYPE:
            trainRouteClientResponse(data);
            break;
        default:
            console.warn('no type match');
    }
};
exports.initClientData = function (connection) {
    index_1.signals.map(function (signal) { return signal.sendStatus(connection); });
    Obvody_1.obvody.map(function (obvod) { return obvod.sendStatus(connection); });
    index_2.trainRoutes.map(function (cesta) { return cesta.sendStatus(connection); });
};
//# sourceMappingURL=index.js.map