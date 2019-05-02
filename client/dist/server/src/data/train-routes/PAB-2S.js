"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _2S_1 = require("../signals/2S");
var PAB_2_1 = require("../signals/PAB-2");
var _2S_1_1 = require("../obvody/trat/2S_1");
var _2S_2_1 = require("../obvody/trat/2S_2");
var train_route_1 = require("../../inc/objects/tran-route/train-route");
var sector_group_1 = require("../../inc/objects/sector/sector-group");
exports.default = new train_route_1.default({
    name: 'PAB_2-2S',
    signalFrom: PAB_2_1.default,
    signalTo: _2S_1.default,
    speed: null,
    sectorsGroup: new sector_group_1.default([_2S_2_1.default, _2S_1_1.default]),
    persistent: true,
});
//# sourceMappingURL=PAB-2S.js.map