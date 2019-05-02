"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const route_builder_1 = require("../actions/route-builder");
const signalSelect = (state, action) => {
    const { signalFrom } = state;
    const { id } = action;
    if (signalFrom === id) {
        return __assign({}, state, { signalFrom: null, signalTo: null });
    }
    if (signalFrom === null) {
        return __assign({}, state, { signalFrom: id });
    }
    return __assign({}, state, { signalTo: id });
};
const registerRoutes = (state, action) => {
    return __assign({}, state, { availableRoutes: action.routes });
};
const clearSelect = (state, action) => {
    return __assign({}, state, { signalFrom: null, signalTo: null });
};
exports.routeBuilder = (state = { signalFrom: null, signalTo: null, availableRoutes: [] }, action) => {
    const { type } = action;
    switch (type) {
        case route_builder_1.ACTION_SIGNAL_SELECT:
            return signalSelect(state, action);
        case route_builder_1.ACTION_REGISTER_ROUTES:
            return registerRoutes(state, action);
        case route_builder_1.ACTION_CLEAR_SELECT:
            return clearSelect(state, action);
        default:
            return state;
    }
};
//# sourceMappingURL=route-builder.js.map