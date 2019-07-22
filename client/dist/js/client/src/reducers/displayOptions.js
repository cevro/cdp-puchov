"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const displayOptions_1 = require("../actions/displayOptions");
const toggleSignal = (state, action) => {
    const { signalType } = action;
    let status = true;
    if (state.signals.hasOwnProperty(signalType)) {
        status = !state.signals[signalType];
    }
    return Object.assign({}, state, { signals: Object.assign({}, state.signals, { [signalType]: status }) });
};
const togglePoints = (state) => {
    return Object.assign({}, state, { points: !state.points });
};
const initialState = {
    signals: {},
    points: false,
};
exports.displayOptions = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case displayOptions_1.ACTION_TOGGLE_SIGNAL_TEXT:
            return toggleSignal(state, action);
        case displayOptions_1.ACTION_TOGGLE_POINT_TEXT:
            return togglePoints(state);
        default:
            return state;
    }
};
//# sourceMappingURL=displayOptions.js.map