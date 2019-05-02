"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SK1_1_1 = require("../obvody/SK1_1");
var SK1_2_1 = require("../obvody/SK1_2");
var SK1_3_1 = require("../obvody/SK1_3");
var SK2_3_1 = require("../obvody/SK2_3");
var SK2_4_1 = require("../obvody/SK2_4");
var _2S_1 = require("../signals/2S");
var AB_1 = require("../signals/AB");
var train_route_1 = require("../../inc/objects/tran-route/train-route");
var sector_group_1 = require("../../inc/objects/sector/sector-group");
exports.default = new train_route_1.default({
    name: '2S-1TK',
    signalFrom: _2S_1.default,
    signalTo: AB_1.default,
    speed: 40,
    sectorsGroup: new sector_group_1.default([SK1_1_1.default, SK1_2_1.default, SK1_3_1.default, SK2_3_1.default, SK2_4_1.default]),
});
//# sourceMappingURL=2S-1TK.js.map