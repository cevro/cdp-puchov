
#ifndef ARDUINO_SIGNAL_H
#define ARDUINO_SIGNAL_H

#include "consts.h"
#include "ISignal.h"

namespace Signals {
    class Signal : public ISignal {
    public:
        int8_t scomPin;
        uint8_t mask;
        int lockTime;


    private:
        uint8_t status;
        SignalAspect_t requestedAspect;
        uint8_t times;
    public:
        Signal(int scomPin, locoNetAddress_t id) : ISignal(id) {
            this->requestedAspect = 0;
            this->aspect = 0;
            this->status = 1;
            this->setPin(scomPin);
        };

    public:

        void setAspect(SignalAspect_t receivedState) {
            if (this->requestedAspect != receivedState) {
                this->requestedAspect = receivedState;
                this->mask = 0x00000001;
                this->times = 0;
            }
        };

    public:
        void clock() {
            if (this->times > 2 && this->requestedAspect != this->aspect) {
                this->aspect = this->requestedAspect;
                this->dumpAspect();
            }
            if (this->lockTime < 300) {
                this->lockTime += 10;
                return;
            }
            switch (this->status) {
                case 1:
                    digitalWrite(this->scomPin, LOW);
                    this->status = 2;
                    break;
                case 2:
                    digitalWrite(this->scomPin, HIGH);
                    this->status = 3;
                    this->mask = 0x00000001;
                    break;
                case 3:

                    digitalWrite(this->scomPin, (this->requestedAspect & this->mask) ? HIGH : LOW);
                    this->mask <<= 1;
                    if (!this->mask) {
                        this->status = 4;
                    }
                    break;
                case 4:
                    digitalWrite(this->scomPin, HIGH);
                    this->lockTime = 0;
                    this->times = this->times + 1;
                    this->status = 1;
                    break;
            };
        };


    public:
        void dump() {
            this->dumpAspect();
           // this->dumpRequestedAspect();
        };

        void dumpAspect() {
            Serial.print(this->getLocoNetId());
            Serial.print(":a:");
            Serial.println(this->getAspect());
        };
/*
        void dumpRequestedAspect() {
            Serial.print(this->getLocoNetId());
            Serial.print(":r:");
            Serial.println(this->requestedAspect);
        };*/

    private:
        void setPin(int8_t pin) {
            this->scomPin = pin;
            pinMode(pin, OUTPUT);
            digitalWrite(this->scomPin, HIGH);
        };
    };
};

#endif //ARDUINO_SIGNAL_H
