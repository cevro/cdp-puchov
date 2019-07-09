#include "StateObject.h"
#include "ISector.h"

#ifndef ARDUINO_SECTORREF_H
#define ARDUINO_SECTORREF_H


class SectorRef : protected ObjectDump, public ISector {

private:
    int state;
public:
    SectorRef(int id) {
        this->locoNetId = id;
        this->state = this->STATE_UNDEFINED;
    }

public:
    void setState(int receivedState) {
        this->state = receivedState;
        this->dumpState();
    }

public:
    int getState() {
        return this->state;
    }

public:
    int getId() {
        return this->locoNetId;
    }

public:
    void handleCmd(char cmd, int value) {
        switch (cmd) {
            case 's':
                this->setState(value);
        }
    }

public:
    void dump(){
        this->dumpState();
    }
    /**
     * @deprecated
     */
    void dumpState() {
        Serial.print(this->locoNetId);
        Serial.print(":s:");
        Serial.println(this->state);
    }
};

#endif //ARDUINO_SECTORREF_H
