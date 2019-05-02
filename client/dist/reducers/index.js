"use strict";
const redux_1 = require("redux");
const messages_1 = require("./messages");
const signals_1 = require("./signals");
const routes_1 = require("./routes");
const sectors_1 = require("./sectors");
const route_builder_1 = require("./route-builder");
const signal_context_menu_1 = require("./signal-context-menu");
exports.app = redux_1.combineReducers({
    messages: messages_1.messages,
    signals: signals_1.signals,
    routes: routes_1.routes,
    sectors: sectors_1.sectors,
    routeBuilder: route_builder_1.routeBuilder,
    signalsContextMenu: signal_context_menu_1.signalsContextMenu,
});
//# sourceMappingURL=index.js.map