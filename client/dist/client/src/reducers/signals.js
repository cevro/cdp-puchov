"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webSocets_1 = require("../actions/webSocets");
var messageRetrieve = function (state, action) {
    var newMessages = state.concat([action.data]);
    if (newMessages.length > 20) {
        newMessages.shift();
    }
    return newMessages;
};
exports.messages = function (state, action) {
    if (state === void 0) { state = []; }
    var type = action;
    switch (type) {
        case webSocets_1.ACTION_SIGNAL_RETRIEVE:
            return signalRetrieve(state, action);
        default:
            return state;
    }
};
//# sourceMappingURL=signals.js.map