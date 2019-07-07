#include "StateObject.h"
#include "ISector.h"

#ifndef ARDUINO_SECTORREF_H
#define ARDUINO_SECTORREF_H


class SectorRef : protected ObjectDump, public ISector {
private:
    int id;
private:
    int state;
public:
    SectorRef(int id) {
        this->id = id;
        this->state = this->STATE_UNDEFINED;
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
    /**
     * @deprecated
     */
    void dump() {
        Serial.print(this->id);
        Serial.print(":s:");
        Serial.println(this->state);
    }
};

#endif //ARDUINO_SECTORREF_H
