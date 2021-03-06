#ifndef ARDUINO_SIGNALREF_H
#define ARDUINO_SIGNALREF_H

#include "consts.h"
#include "ISignal.h"

namespace Signals {

    class SignalRef : public ISignal {
        SignalRef(int signalId) : ISignal(signalId) {}

    public:
        void dump() {};
    public:
        void clock() {};

        void setAspect(SignalAspect_t receivedState) {
            this->aspect = receivedState;
        };
    };

};

#endif //ARDUINO_SIGNALREF_H
