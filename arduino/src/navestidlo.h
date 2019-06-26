#include "Arduino.h"

class Signal {
private:
    int id;
    int scomPin;
    uint8_t mask;
    int state = 5;
    int lockTime;
    uint8_t status = 1;

    Signal(int scomPin, id) : scomPin(scomPin), id(id) {};

public:

    void setNavest(int id) {
        //  Serial.print('C');
        // Serial.println(id);
        this->state = id;
        this->mask = 0x00000001;
    }

    void setState(int id) {
        this->state = id;
        this->mask = 0x00000001;
    }

public:
    void clock() {
        //Serial.println(this->data);
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

    int getNavest() {
        return this->state;
    }

    int getState() {
        return this->state;
    }

public:

    void setPin(int pin) {
        this->scomPin = pin;
        pinMode(pin, OUTPUT);
        digitalWrite(this->scomPin, HIGH);
    }
};
