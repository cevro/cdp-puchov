"use strict";
const webSocets_1 = require("../actions/webSocets");
const messageRetrieve = (state, action) => {
    const newMessages = [action.data, ...state];
    if (newMessages.length > 5) {
        newMessages.pop();
    }
    return newMessages;
};
exports.messages = (state = [], action) => {
    const { type } = action;
    switch (type) {
        case webSocets_1.ACTION_MESSAGE_RETRIEVE:
            return messageRetrieve(state, action);
        default:
            return state;
    }
};
//# sourceMappingURL=messages.js.map