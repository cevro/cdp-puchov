"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pu_LpM_1 = require("./autoBlock/Pu-LpM");
exports.frontEndScheme = {
    'ab-PuLpM': Pu_LpM_1.autoBlockPuLpM,
    ZSTPu: {
        cards: {
            signals: true,
            sectors: true,
            ABSectors: true,
            points: true,
            routeBuilder: true,
            routes: true,
        },
        objects: {
            sectors: [],
            signals: [],
            points: [],
            ABSectors: [],
            biDirAB: [],
        },
        viewBox: '-300 -90 2650 400',
    },
};
//# sourceMappingURL=all.js.map