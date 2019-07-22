"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webSocets_1 = require("../actions/webSocets");
const addToBuffer = (state, action) => {
    state.index++;
    return Object.assign({}, state, { messages: Object.assign({}, state.messages, { [state.index]: action.message }) });
};
const removeFromBuffer = (state, action) => {
    const messages = {};
    for (const id in state.messages) {
        if (state.messages.hasOwnProperty(id)) {
            if (id !== action.id) {
                messages[id] = state.messages[id];
            }
        }
    }
    return Object.assign({}, state, { messages });
};
exports.webSocket = (state = { index: 0, messages: {} }, action) => {
    const { type } = action;
    switch (type) {
        case webSocets_1.ACTION_MESSAGE_SEND:
            return addToBuffer(state, action);
        case webSocets_1.ACTION_SEND_SUCCESS:
            return removeFromBuffer(state, action);
        default:
            return state;
    }
};
//# sourceMappingURL=webSocketBuffer.js.map