#include "StateObject.h"

#ifndef KOLAJISKO_AUTOBLOCKSECTOR_H
#define KOLAJISKO_AUTOBLOCKSECTOR_H

class AutoBlockSector : ObjectDump {
public:
    static const int STATE_OCCUPIED = 1;
    static const int STATE_FREE = 2;


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
    bool fullBlockConditionActive;

    AutoBlockSector(
            int id,
            int length,
            int entrySignal,
            int exitSignal,
            const int sectors[]
    ) : entrySignalId(entrySignal), exitSignalId(exitSignal) {
        this->id = id;
        this->length = length;
        this->state = -1;
        this->error = 0;
        this->active = true;
        this->fullBlockConditionActive = true;
        for (int i = 0; i < length; i++) {
            this->sectorIds[i] = sectors[i];
        }
    }

public:
    void handleCmd(char cmd, int value) {
        switch (cmd) {
            case 'e':
                this->error = value;
                this->dumpError();
                return;
            case 'c':
                this->fullBlockConditionActive = !!value;
                this->dumpFullBlockConditionActive();
                return;
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

        this->dumpFullBlockConditionActive();
        this->dumpActive();
        this->dumpError();
    }
    void dumpFullBlockConditionActive(){
        Serial.print(this->id);
        Serial.print(":c:");
        Serial.println(this->fullBlockConditionActive);
    }
     void dumpActive(){
        Serial.print(this->id);
        Serial.print(":a:");
        Serial.println(this->active);
     }

     void dumpError(){
         Serial.print(this->id);
         Serial.print(":e:");
         Serial.println(this->error);
     }

};

#endif //KOLAJISKO_AUTOBLOCKSECTOR_H
