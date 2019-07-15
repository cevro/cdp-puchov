//
// Created by miso on 15.7.2019.
//

#ifndef KOLAJISKO_ISIGNAL_H
#define KOLAJISKO_ISIGNAL_H

#include "consts.h"

namespace Signals {
    class ISignal {
    protected:
        int locoNetId;
    protected:
        SignalState_t state;
    public:
        ISignal(int locoNetId) : locoNetId(locoNetId) {

        }

    public:
        int getId() {
            return this->locoNetId;
        }

    public:
        int getLocoNetId() {
            return this->getId();
        }

    public:
        void setState(SignalState_t receivedState) {
            this->state = receivedState;
            this->dumpState();
        }

    public:
        SignalState_t getState() {
            return this->state;
        }

    public:
        void dumpState() {
            Serial.print(this->locoNetId);
            Serial.print(":s:");
            Serial.println(this->state);
        }
    };

};
#endif //KOLAJISKO_ISIGNAL_H
