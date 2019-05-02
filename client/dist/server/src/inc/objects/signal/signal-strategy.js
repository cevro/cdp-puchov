"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signals_1 = require("../../../consts/signal/signals");
var getSignalToSide = function (toNavest) {
    switch (toNavest) {
        case signals_1.NAVEST_STOJ:
        case 8:
        case 9:
        case 10:
        case 12:
        case 15:
            return 6;
        case signals_1.NAVEST_VOLNO:
        case signals_1.NAVEST_VYSTRAHA:
        case signals_1.NAVEST_OCAKAVAJ_40:
        case 11:
            return signals_1.NAVEST_40_A_VOLNO;
        case signals_1.NAVEST_40_A_VOLNO:
        case 6:
        case 7:
        case 14:
        case 16:
            return 7;
        default:
            return signals_1.NAVEST_STOJ;
    }
};
var getSignalStraight = function (toNavest) {
    switch (toNavest) {
        case signals_1.NAVEST_STOJ:
        case 8:
        case 9:
        case 10:
        case 12:
        case 15:
            return signals_1.NAVEST_VYSTRAHA;
        case signals_1.NAVEST_VOLNO:
        case signals_1.NAVEST_VYSTRAHA:
        case signals_1.NAVEST_OCAKAVAJ_40:
        case 11:
            return signals_1.NAVEST_40_A_VOLNO;
        case signals_1.NAVEST_40_A_VOLNO:
        case signals_1.NAVEST_40_A_VYSTRAHA:
        case signals_1.NAVEST_40_A_OCAKAVAJ_40:
        case 14:
        case 16:
            return signals_1.NAVEST_OCAKAVAJ_40;
        default:
            return signals_1.NAVEST_STOJ;
    }
};
exports.signalStrategy = function (signalFrom, signalTo, status, speed) {
    if (speed === void 0) { speed = null; }
    var toNavest = signalTo.getStatus();
    var fromNavest = signals_1.NAVEST_STOJ;
    if (status == 0) {
        fromNavest = signals_1.NAVEST_STOJ;
    }
    else {
        if (speed !== null) {
            fromNavest = getSignalToSide(toNavest);
        }
        else {
            fromNavest = getSignalStraight(toNavest);
        }
    }
    return fromNavest;
};
//# sourceMappingURL=signal-strategy.js.map