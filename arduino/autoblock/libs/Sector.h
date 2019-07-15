#include "ISector.h"

#ifndef ARDUINO_SECTOR_H
#define ARDUINO_SECTOR_H

class Sector : public ISector {
private:

    int pin;
    int values[5];
    int index;

    int8_t state;
public:
    Sector(int locoNetId, int pin) : locoNetId(locoNetId), pin(pin) {}

private:
    void readValues() {
        static int index;
        this->values[index] = analogRead(this->pin);
        index++;
        index = index % 5;
    }

private:
    float getMean() {
        int sum = 0;
        for (int i = 0; i < 5; i++) {
            sum += values[i];
        }
        return sum / 5.0;
    }

public:
    void clock() {
        int newState;
        if (this->getMean() < 10) {
            newState = this->STATE_FREE;
        } else {
            newState = this->STATE_OCCUPIED;
        }
        if (newState != this->state) {
            this->state = newState;
            this->dump();
        }
    }

public:
    int8_t getState() {
        return this->state;
    }

public:
    /**
     * @deprecated
     */
    void dump() {
        Serial.print(this->id);
        Serial.print(":s:");
        Serial.println(this->state);
    }
};

#endif //ARDUINO_SECTOR_H
