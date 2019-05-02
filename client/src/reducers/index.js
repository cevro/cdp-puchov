"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var messages_1 = require("./messages");
var signals_1 = require("./signals");
var routes_1 = require("./routes");
var sectors_1 = require("./sectors");
exports.app = redux_1.combineReducers({
    messages: messages_1.messages,
    signals: signals_1.signals,
    routes: routes_1.routes,
    sectors: sectors_1.sectors
});
