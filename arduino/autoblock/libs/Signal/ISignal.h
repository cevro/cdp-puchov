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
        /**
         * @deprecated
         * @return
         */
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

    public:
        virtual void clock()=0;

    public:
        virtual void handleCmd(char cmd, int value);

    public:
        virtual void dump() = 0;
    };


};
#endif //KOLAJISKO_ISIGNAL_H
