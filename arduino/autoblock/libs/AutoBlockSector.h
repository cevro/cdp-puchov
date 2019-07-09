#include "StateObject.h"

#ifndef KOLAJISKO_AUTOBLOCKSECTOR_H
#define KOLAJISKO_AUTOBLOCKSECTOR_H

class AutoBlockSector : ObjectDump {
public:
    static const int8_t STATE_OCCUPIED = 1;
    static const int8_t STATE_FREE = 2;
    static const int8_t STATE_UNDEFINED = -1;
    static const int8_t STATE_INACTIVE = 3;

    static const int8_t ERROR_FULL_BLOCK_CONDITION = 1;
private:
    int id;
    bool active;
    bool fullBlockConditionActive;
    int8_t error;
    int8_t state;
public:
    // 0 FREE 1 obsadeny
    uint8_t length;
    int entrySignalId;
    int exitSignalId;
    int sectorIds[15];


    AutoBlockSector(
            int id,
            uint8_t length,
            int entrySignal,
            int exitSignal,
            const int sectors[]
    ) : entrySignalId(entrySignal), exitSignalId(exitSignal) {
        this->id = id;
        this->length = length;
        this->state = this->STATE_UNDEFINED;
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
                this->setError(value);
                return;
            case 'c':
                this->setFullBlockConditionActive(!!value);
                return;
        }
    }

public:
    int getId() {
        return this->id;
    }

public:
    void setState(int8_t state) {
        this->state = state;
        this->dumpState();
    }

    int8_t getState() {
        return this->state;
    }

public:
    void setError(int8_t err) {
        this->error = err;
        this->dumpError();
    }

    int8_t getError() {
        return this->error;
    }

public:
    void setFullBlockConditionActive(bool c) {
        this->fullBlockConditionActive = c;
        this->dumpFullBlockConditionActive();
    }

    bool getFullBlockConditionActive() {
        return this->fullBlockConditionActive;
    }

public:
    void setActive(bool a) {
        this->active = a;
        this->dumpActive();

        this->setError(0);
    }

    bool getActive() {
        return this->active;
    }

public:
    void dump() {
        this->dumpState();
        this->dumpFullBlockConditionActive();
        this->dumpActive();
        this->dumpError();
    }

    void dumpState() {
        Serial.print(this->id);
        Serial.print(":s:");
        Serial.println(this->state);
    }

    void dumpFullBlockConditionActive() {
        Serial.print(this->id);
        Serial.print(":c:");
        Serial.println(this->fullBlockConditionActive);
    }

    void dumpActive() {
        Serial.print(this->id);
        Serial.print(":a:");
        Serial.println(this->active);
    }

    void dumpError() {
        Serial.print(this->id);
        Serial.print(":e:");
        Serial.println(this->error);
    }

};

#endif //KOLAJISKO_AUTOBLOCKSECTOR_H
