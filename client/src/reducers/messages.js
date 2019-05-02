"use strict";
exports.__esModule = true;
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
    var type = action.type;
    switch (type) {
        case webSocets_1.ACTION_MESSAGE_RETRIEVE:
            return messageRetrieve(state, action);
        default:
            return state;
    }
};
