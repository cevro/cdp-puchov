"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1S_1 = require("../signals/1S");
var PAB_1_1 = require("../signals/PAB-1");
var _1S_1_1 = require("../obvody/trat/1S_1");
var _1S_2_1 = require("../obvody/trat/1S_2");
var train_route_1 = require("../../inc/objects/tran-route/train-route");
var sector_group_1 = require("../../inc/objects/sector/sector-group");
exports.default = new train_route_1.default({
    name: 'PAB_1-1S',
    signalFrom: PAB_1_1.default,
    signalTo: _1S_1.default,
    speed: null,
    sectorsGroup: new sector_group_1.default([_1S_1_1.default, _1S_2_1.default]),
    persistent: true,
});
//# sourceMappingURL=PAB-1S.js.map