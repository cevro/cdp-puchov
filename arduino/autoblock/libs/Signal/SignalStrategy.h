#ifndef ARDUINO_SIGNALSTRATEGY_H
#define ARDUINO_SIGNALSTRATEGY_H

#include "consts.h"

namespace Signals {

    class SignalStrategy {
    public:
        static SignalState_t getThrough(SignalState_t endSignalState) {
            switch (endSignalState) {
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
            };
        };
    public:
        static SignalState_t getClosed40(SignalState_t endSignalState) {
            switch (endSignalState) {
                case 0:
                case 8:
                case 9:
                case 10:
                case 12:
                case 15:
                    return 6;
                case 1:
                case 2:
                case 3:
                case 11:
                    return 4;
                case 4:
                case 6:
                case 7:
                case 14:
                case 16:
                    return 7;
                default:
                    return 0;
            };
        };
    };

/**
 * @deprecated
 * @param endSignalState
 * @return
 */
    SignalState_t signalStrategy(SignalState_t endSignalState) {
        return SignalStrategy::getThrough(endSignalState);
    };
};

#endif //ARDUINO_SIGNALSTRATEGY_H
