"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SK2_1_1 = require("../obvody/SK2_1");
var SK1_2_1 = require("../obvody/SK1_2");
var SK2_2_1 = require("../obvody/SK2_2");
var SK1_3_1 = require("../obvody/SK1_3");
var SK1_4_1 = require("../obvody/SK1_4");
var _1S_1 = require("../signals/1S");
var AB_1 = require("../signals/AB");
var train_route_1 = require("../../inc/objects/tran-route/train-route");
var sector_group_1 = require("../../inc/objects/sector/sector-group");
exports.default = new train_route_1.default({
    name: '1S-2TK',
    signalFrom: _1S_1.default,
    signalTo: AB_1.default,
    speed: 40,
    sectorsGroup: new sector_group_1.default([SK1_4_1.default, SK1_3_1.default, SK1_2_1.default, SK2_2_1.default, SK2_1_1.default]),
});
//# sourceMappingURL=1S-2TK.js.map