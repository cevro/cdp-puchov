"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const webSocets_1 = require("../actions/webSocets");
const signalRetrieve = (state, action) => {
    const { name } = action.data;
    return __assign({}, state, { [name]: action.data });
};
exports.signals = (state = {}, action) => {
    const { type } = action;
    switch (type) {
        case webSocets_1.ACTION_SIGNAL_RETRIEVE:
            return signalRetrieve(state, action);
        default:
            return state;
    }
};
//# sourceMappingURL=signals.js.map