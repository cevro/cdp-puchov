"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_builder_1 = require("../actions/route-builder");
const signalSelect = (state, action) => {
    const { selectedSignal } = state;
    const { id } = action;
    if (selectedSignal === id) {
        return Object.assign({}, state, { selectedSignal: null });
    }
    return Object.assign({}, state, { selectedSignal: id });
};
exports.routeBuilder = (state = {}, action) => {
    const { type } = action;
    switch (type) {
        case route_builder_1.ACTION_SIGNAL_SELECT:
            return signalSelect(state, action);
        default:
            return state;
    }
};
//# sourceMappingURL=routeBuilder.js.map