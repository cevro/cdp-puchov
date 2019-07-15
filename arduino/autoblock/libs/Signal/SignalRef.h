#ifndef ARDUINO_SIGNALREF_H
#define ARDUINO_SIGNALREF_H

#include "consts.h"
#include "ISignal.h"

namespace Signals {

    class SignalRef : public ISignal {
        SignalRef(int signalId) : ISignal(signalId) {}

    public:
        void dump() {
            this->dumpState();
        };
    public:
        void clock() {};

    public:
        void handleCmd(char cmd, int value) {};
    };

};

#endif //ARDUINO_SIGNALREF_H
