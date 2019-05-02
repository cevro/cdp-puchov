"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signal_1 = require("../../inc/objects/signal/signal");
var ardu_1 = require("../../ardu");
exports.default = new signal_1.Signal({
    name: 'PAB-2',
    arduino: ardu_1.default,
    port: 2,
    type: signal_1.VCHODOVE,
});
//# sourceMappingURL=PAB-2.js.map