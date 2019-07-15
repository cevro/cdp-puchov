#ifndef ARDUINO_SIGNALSTRATEGY_H
#define ARDUINO_SIGNALSTRATEGY_H

#include "consts.h"

namespace Signals {
    SignalState_t signalStrategy(SignalState_t endSignalId) {
        switch (endSignalId) {
            case 0:
            case 8:
            case 9:
            case 10:
            case 12:
            case 15:
                return 2;
            case 1:
            case 2:
            case 3:
            case 11:
                return 1;
            case 4:
            case 6:
            case 7:
            case 14:
            case 16:
                return 3;
            default:
                return 0;
        }
    }
}
#endif //ARDUINO_SIGNALSTRATEGY_H
