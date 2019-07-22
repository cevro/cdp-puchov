"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const messages_1 = require("./messages");
const objectState_1 = require("./objectState");
const routeBuilder_1 = require("./routeBuilder");
const signalContextMenu_1 = require("./signalContextMenu");
const displayOptions_1 = require("./displayOptions");
const webSocketBuffer_1 = require("./webSocketBuffer");
exports.app = redux_1.combineReducers({
    messages: messages_1.messages,
    webSocket: webSocketBuffer_1.webSocket,
    objectState: objectState_1.objectState,
    routeBuilder: routeBuilder_1.routeBuilder,
    signalContextMenu: signalContextMenu_1.signalContextMenu,
    displayOptions: displayOptions_1.displayOptions,
});
//# sourceMappingURL=index.js.map