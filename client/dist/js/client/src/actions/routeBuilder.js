"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webSocets_1 = require("./webSocets");
exports.ACTION_SIGNAL_SELECT = 'ACTION_SIGNAL_SELECT';
exports.signalSelect = (id) => {
    return {
        type: exports.ACTION_SIGNAL_SELECT,
        id,
    };
};
exports.ACTION_SECTOR_SELECT = 'ACTION_SECTOR_SELECT';
exports.sectorSelect = (id) => {
    return {
        type: exports.ACTION_SECTOR_SELECT,
        id,
    };
};
exports.ACTION_CLEAR_SELECT = 'ACTION_CLEAR_SELECT';
exports.clearSelect = () => {
    return {
        type: exports.ACTION_CLEAR_SELECT,
    };
};
exports.findRoute = (dispatch, startSignalId, endSectorId) => {
    return dispatch(webSocets_1.onSendMessage({
        action: 'find',
        entity: 'route-finder',
        date: new Date(),
        id: 0,
        data: {
            startSignalId,
            endSectorId,
        },
    }));
};
exports.buildRoute = (dispatch, id, buildOptions) => {
    dispatch(exports.clearSelect());
    return dispatch(webSocets_1.onSendMessage({
        action: 'build',
        entity: 'route-builder',
        date: new Date(),
        id: 0,
        data: {
            id,
            buildOptions,
        },
    }));
};
//# sourceMappingURL=routeBuilder.js.map