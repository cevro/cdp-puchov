#include "StateObject.h"

#ifndef KOLAJISKO_AUTOBLOCKSECTOR_H
#define KOLAJISKO_AUTOBLOCKSECTOR_H

class AutoBlockSector : ObjectDump {
public:
    static const int STATE_OCCUPIED = 1;
    static const int STATE_FREE = 0;
    // ERRORS
    static const enum{
     ERROR_FULL_BLOCK_CONDITION = 1;
    }errors;
    static const int ERROR_FULL_BLOCK_CONDITION = 1;
private:
    int id;
public:
    bool active;

    int state; // 0 FREE 1 obsadeny
    unsigned int length;
    int error;
    int entrySignalId;
    int exitSignalId;
    int sectorIds[10];

    AutoBlockSector(
            int id,
            int length,
            int entrySignal,
            int exitSignal,
            const int sectors[],
            bool active = true
    ) : entrySignalId(entrySignal), exitSignalId(exitSignal) {
        this->id = id;
        this->length = length;
        this->state = this->STATE_FREE;
        this->active = active;
        for (int i = 0; i < length; i++) {
            this->sectorIds[i] = sectors[i];
        }
    }

public:
    void handleCmd(char cmd, int value) {
        switch (cmd) {
            case 'e':
                this->error = value;
        }
    }

public:
    int getId() {
        return this->id;
    }

public:
    void dump() {

        Serial.print(this->id);
        Serial.print(":s:");
        Serial.println(this->state);

        Serial.print(this->id);
        Serial.print(":e:");
        Serial.println(this->error);
    }

};

#endif //KOLAJISKO_AUTOBLOCKSECTOR_H
