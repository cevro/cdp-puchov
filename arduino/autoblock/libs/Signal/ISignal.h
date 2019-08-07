#ifndef KOLAJISKO_ISIGNAL_H
#define KOLAJISKO_ISIGNAL_H

#include "consts.h"
#include "../LocoNetObject.h"

namespace Signals {
    class ISignal : public LocoNetObject {
    protected:
        SignalAspect_t aspect;
    public:
        ISignal(int locoNetId) : LocoNetObject(locoNetId) {};


    public:
        virtual void setAspect(SignalAspect_t receivedState) = 0;

    public:
        SignalAspect_t getState() {
            return this->aspect;
        }
        SignalAspect_t getAspect() {
            return this->aspect;
        }

    public:
        void handleCmd(char cmd, int value) {
            switch (cmd) {
                case 'a':
                    this->setAspect(value);
            }
            return;
        }

    };
};
#endif //KOLAJISKO_ISIGNAL_H
