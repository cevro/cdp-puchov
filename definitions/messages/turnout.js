"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../messages");
var TurnoutMessages;
(function (TurnoutMessages) {
    /* *********** client->server ************************/
    TurnoutMessages.MESSAGE_ACTION_SET_POSITION = 'set-position';
    /* *********** server->client ************************/
    TurnoutMessages.MESSAGE_ACTION_STATE_UPDATE = messages_1.MESSAGE_ACTION_STATE_UPDATE_GLOBAL;
})(TurnoutMessages = exports.TurnoutMessages || (exports.TurnoutMessages = {}));
//# sourceMappingURL=turnout.js.map