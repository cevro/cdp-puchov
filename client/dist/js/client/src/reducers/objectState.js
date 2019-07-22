"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webSocets_1 = require("../actions/webSocets");
const interfaces_1 = require("../components/definitions/interfaces");
const consts_1 = require("../../../definitions/consts");
const messageRetrieve = (store, action) => {
    if (action.data.action === interfaces_1.MESSAGE_ACTION_STATE_UPDATE) {
        switch (action.data.entity) {
            case consts_1.ENTITY_SECTOR:
                return sectorRetrieve(store, action);
            case consts_1.ENTITY_SIGNAL:
                return signalRetrieve(store, action);
            case consts_1.ENTITY_TURNOUT:
                return turnoutRetrieve(store, action);
            case consts_1.ENTITY_AB_SECTOR:
                return ABSectorRetrieve(store, action);
            case 'banalized-auto-block':
                return biDirABRetrieve(store, action);
            default:
                return store;
        }
    }
    if (action.data.action === interfaces_1.MESSAGE_ACTION_DUMP) {
        switch (action.data.entity) {
            case '*':
                return dumpRetrieve(store, action);
            case 'route-builder':
                return trainRouteBufferDump(store, action);
            default:
                return store;
        }
    }
    return store;
};
const dumpRetrieve = (store, action) => {
    const { data: { sectors, signals, points, routeBuilder, ABSectors, biDirABs }, } = action.data;
    const sectorsData = {};
    sectors.forEach((sector) => {
        sectorsData[sector.locoNetId] = sector;
    });
    const signalsData = {};
    signals.forEach((signal) => {
        signalsData[signal.locoNetId] = signal;
    });
    const pointsData = {};
    points.forEach((point) => {
        pointsData[point.locoNetId] = point;
    });
    const ABSectorsData = {};
    ABSectors.forEach((sector) => {
        ABSectorsData[sector.locoNetId] = sector;
    });
    const biDirABsData = {};
    biDirABs.forEach((AB) => {
        biDirABsData[AB.locoNetId] = AB;
    });
    return Object.assign({}, store, { sectors: sectorsData, signals: signalsData, turnouts: pointsData, routeBuilder: routeBuilder, ABSectors: ABSectorsData, biDirABs: biDirABsData });
};
function objectRetrieve(accessKey, store, action) {
    const { data, data: { locoNetId } } = action.data;
    return Object.assign({}, store, { [accessKey]: Object.assign({}, store[accessKey], { [+locoNetId]: data }) });
}
const ABSectorRetrieve = (store, action) => {
    return objectRetrieve('ABSectors', store, action);
};
const biDirABRetrieve = (store, action) => {
    return objectRetrieve('biDirABs', store, action);
};
const signalRetrieve = (store, action) => {
    return objectRetrieve('signals', store, action);
};
const sectorRetrieve = (store, action) => {
    return objectRetrieve('sectors', store, action);
};
const turnoutRetrieve = (store, action) => {
    return objectRetrieve('turnouts', store, action);
};
const trainRouteBufferDump = (store, action) => {
    const { data } = action.data;
    return Object.assign({}, store, { routeBuilder: data });
};
const initState = {
    signals: {},
    sectors: {},
    turnouts: {},
    ABSectors: {},
    routeBuilder: {
        buffer: [],
        hasError: false,
        locked: false,
    },
    biDirABs: {},
    oneDirABs: {},
    locoNetConnector: {
        availablePorts: [],
        port: undefined,
        status: undefined,
    },
};
exports.objectState = (state = initState, action) => {
    const { type } = action;
    switch (type) {
        case webSocets_1.ACTION_MESSAGE_RETRIEVE:
            return messageRetrieve(state, action);
        case webSocets_1.ACTION_CONNECTION_CLOSE:
            return initState;
        default:
            return state;
    }
};
//# sourceMappingURL=objectState.js.map