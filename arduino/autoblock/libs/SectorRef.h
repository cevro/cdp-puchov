#include "StateObject.h"

#ifndef ARDUINO_SECTORREF_H
#define ARDUINO_SECTORREF_H


class SectorRef : ObjectDump {
public:
    static const int STATE_OCCUPIED = 1;
    static const int STATE_FREE = 0;
private:
    int id;
private:
    int state;
public:
    SectorRef(int id) {
        this->id = id;
        this->state = 0;
    }

public:
    void setState(int receivedState) {
        this->state = receivedState;
        this->dump();
    }

public:
    int getState() {
        return this->state;
    }

public:
    int getId() {
        return this->id;
    }

public:
    void handleCmd(char cmd, int value) {
        switch (cmd) {
            case 's':
                this->setState(value);
        }
    }

public:
    void dump() {
        Serial.print("o:");
        Serial.print(this->id);
        Serial.print(":");
        Serial.println(this->state);
    }
};

#endif //ARDUINO_SECTORREF_H
