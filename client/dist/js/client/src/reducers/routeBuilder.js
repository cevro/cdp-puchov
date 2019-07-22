"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routeBuilder_1 = require("../actions/routeBuilder");
const webSocets_1 = require("../actions/webSocets");
const initState = {
    startSignalId: null,
    endSectorId: null,
    availableRoutes: [],
};
const signalSelect = (state, action) => {
    return {
        startSignalId: action.id,
        endSectorId: null,
        availableRoutes: [],
    };
};
const sectorSelect = (state, action) => {
    if (state.startSignalId === null) {
        return state;
    }
    return Object.assign({}, state, { endSectorId: action.id });
};
const registerRoutes = (state, action) => {
    if (action.data.entity === 'route-finder' && action.data.action === 'found') {
        return Object.assign({}, state, { startSignalId: null, endSectorId: null, availableRoutes: action.data.data.routes });
    }
    return state;
};
const clearSelect = () => {
    return initState;
};
exports.routeBuilder = (state = initState, action) => {
    const { type } = action;
    switch (type) {
        case routeBuilder_1.ACTION_SIGNAL_SELECT:
            return signalSelect(state, action);
        case routeBuilder_1.ACTION_SECTOR_SELECT:
            return sectorSelect(state, action);
        case webSocets_1.ACTION_MESSAGE_RETRIEVE:
            return registerRoutes(state, action);
        case routeBuilder_1.ACTION_CLEAR_SELECT:
            return clearSelect();
        default:
            return state;
    }
};
//# sourceMappingURL=routeBuilder.js.map