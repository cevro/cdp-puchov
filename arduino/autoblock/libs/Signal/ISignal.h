#ifndef KOLAJISKO_ISIGNAL_H
#define KOLAJISKO_ISIGNAL_H

#include "consts.h"
#include "../LocoNetObject.h"

namespace Signals {
    class ISignal : public LocoNetObject {
    protected:
        SignalState_t state;
    public:
        ISignal(int locoNetId) : LocoNetObject(locoNetId) {

        }


    public:
        void setState(SignalState_t receivedState) {
            this->state = receivedState;
        };

    public:
        SignalState_t getState() {
            return this->state;
        }

    public:
        void handleCmd(char cmd, int value) {
            switch (cmd) {
                case 's':
                    this->setState(value);
            }
            return;
        }

    };
};
#endif //KOLAJISKO_ISIGNAL_H
