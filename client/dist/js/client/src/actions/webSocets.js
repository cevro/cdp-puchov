"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("../../../definitions/consts");
const messages_1 = require("../../../definitions/messages");
exports.ACTION_MESSAGE_RETRIEVE = 'ACTION_MESSAGE_RETRIEVE';
exports.onMessageRetrieve = (data) => {
    return {
        type: exports.ACTION_MESSAGE_RETRIEVE,
        data,
    };
};
exports.ACTION_MESSAGE_SEND = 'ACTION_MESSAGE_SEND';
function onSendMessage(message) {
    return {
        type: exports.ACTION_MESSAGE_SEND,
        message,
    };
}
exports.onSendMessage = onSendMessage;
exports.ACTION_CONNECTION_CLOSE = 'ACTION_CONNECTION_CLOSE';
exports.connectionClose = () => {
    return {
        type: exports.ACTION_CONNECTION_CLOSE,
    };
};
exports.ACTION_SEND_SUCCESS = 'ACTION_SEND_SUCCESS';
exports.successSend = (id) => {
    return {
        type: exports.ACTION_SEND_SUCCESS,
        id,
    };
};
function send(dispatch, id, entity, action, data) {
    return dispatch(onSendMessage({
        action,
        entity,
        date: new Date(),
        id,
        data,
    }));
}
exports.send = send;
exports.changeSector = (dispatch, id, state) => {
    return send(dispatch, id, consts_1.ENTITY_SECTOR, 'set-state', { id, state });
};
exports.changeSignal = (dispatch, id, state) => {
    return dispatch(onSendMessage({
        action: 'set-state',
        entity: consts_1.ENTITY_SIGNAL,
        date: new Date(),
        id,
        data: { id, state },
    }));
};
exports.changeTurnout = (dispatch, id, state) => {
    return dispatch(onSendMessage({
        action: messages_1.TurnoutMessages.MESSAGE_ACTION_SET_POSITION,
        entity: consts_1.ENTITY_TURNOUT,
        date: new Date(),
        id,
        data: { id, state },
    }));
};
exports.changeABCondition = (dispatch, id, state) => {
    return dispatch(onSendMessage({
        action: 'switch-block-condition',
        entity: consts_1.ENTITY_AB_SECTOR,
        date: new Date(),
        id,
        data: { id, state },
    }));
};
exports.removeABError = (dispatch, id) => {
    return dispatch(onSendMessage({
        action: 'remove-error',
        entity: consts_1.ENTITY_AB_SECTOR,
        date: new Date(),
        id,
        data: { id },
    }));
};
exports.changeABDir = (dispatch, id, dir) => {
    return dispatch(onSendMessage({
        action: 'change-dir',
        entity: 'banalized-auto-block',
        date: new Date(),
        id,
        data: { id, dir },
    }));
};
//# sourceMappingURL=webSocets.js.map