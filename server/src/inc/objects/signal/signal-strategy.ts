import  {
    NAVEST_STOJ,
    NAVEST_VOLNO,
    NAVEST_VYSTRAHA,
    NAVEST_40_A_VOLNO,
    NAVEST_TEST,
    NAVEST_40_A_VYSTRAHA,
    NAVEST_40_A_OCAKAVAJ_40,
    NAVEST_OCAKAVAJ_40
}
    from '../../../consts/signal/signals';
import {Signal} from "./signal";
import {STATUS_BUSY} from '../../../consts/obvod/status';

const getSignalToSide = (toNavest: number) => {
    switch (toNavest) {
        case NAVEST_STOJ:
        case 8:
        case 9:
        case 10:
        case 12:
        case 15:
            return 6;
        case NAVEST_VOLNO:
        case NAVEST_VYSTRAHA:
        case NAVEST_OCAKAVAJ_40:
        case 11:
            return NAVEST_40_A_VOLNO;
        case NAVEST_40_A_VOLNO:
        case 6:
        case 7:
        case 14:
        case 16:
            return 7;
        default:
            return NAVEST_STOJ;

    }
};

const getSignalStraight = (toNavest: number) => {
    switch (toNavest) {
        case NAVEST_STOJ:
        case 8:
        case 9:
        case 10:
        case 12:
        case 15:
            return NAVEST_VYSTRAHA;
        case NAVEST_VOLNO:
        case NAVEST_VYSTRAHA:
        case NAVEST_OCAKAVAJ_40:
        case 11:
            return NAVEST_40_A_VOLNO;
        case NAVEST_40_A_VOLNO:
        case NAVEST_40_A_VYSTRAHA:
        case NAVEST_40_A_OCAKAVAJ_40:
        case 14:
        case 16:
            return NAVEST_OCAKAVAJ_40;
        default:
            return NAVEST_STOJ;
    }
};

export const signalStrategy = (signalFrom: Signal, signalTo: Signal, status: number, speed = null) => {
    let toNavest = signalTo.getStatus();
    let fromNavest = NAVEST_STOJ;
    if (status == 0) {
        fromNavest = NAVEST_STOJ;
    } else {
        if (speed !== null) {
            fromNavest = getSignalToSide(toNavest);
        } else {
            fromNavest = getSignalStraight(toNavest);
        }
    }
    return fromNavest;
};