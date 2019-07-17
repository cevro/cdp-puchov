
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
    public:
        Signal(int scomPin, int id) : ISignal(id) {
            // this->state = 5;
            this->status = 1;
            this->setPin(scomPin);
        };

    public:

        void setState(SignalState_t receivedState) {
            this->state = receivedState;
            this->mask = 0x00000001;
            this->dumpState();
        }

    public:
        void clock() {
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

                    digitalWrite(this->scomPin, (this->state & this->mask) ? HIGH : LOW);
                    this->mask <<= 1;
                    if (!this->mask) {
                        this->status = 4;
                    }
                    break;
                case 4:
                    digitalWrite(this->scomPin, HIGH);
                    this->lockTime = 0;

                    this->status = 1;
                    break;
            }
        }


    public:
        void dump() {
            this->dumpState();
        }

        void dumpState() {
            Serial.print(this->getLocoNetId());
            Serial.print(":s:");
            Serial.println(this->getState());
        }

    private:
        void setPin(int8_t pin) {
            this->scomPin = pin;
            pinMode(pin, OUTPUT);
            digitalWrite(this->scomPin, HIGH);
        }
    };
};

#endif //ARDUINO_SIGNAL_H
