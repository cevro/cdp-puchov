

#ifndef KOLAJISKO_AUTOBLOCKSECTOR_H
#define KOLAJISKO_AUTOBLOCKSECTOR_H

#include "StateObject.h"
#include "Signal/Signal.h"
#include "Signal/consts.h"
#include "LocoNetObject.h"
#include "./Sectors/ISector.h"

typedef int8_t ABSectorState_t;

const ABSectorState_t AB_SECTOR_STATE_OCCUPIED = 1;
const ABSectorState_t AB_SECTOR_STATE_FREE = 2;
const ABSectorState_t AB_SECTOR_STATE_UNDEFINED = -1;


class AutoBlockSector : public LocoNetObject {
public:
    static const int8_t ERROR_FULL_BLOCK_CONDITION = 1;
private:
    bool active;
    bool fullBlockConditionActive;
    int8_t error;
    ABSectorState_t state;
public:
    // 0 FREE 1 obsadeny
    uint8_t length;
    Signals::Signal *entrySignal;
    Signals::Signal *exitSignal;
    Sectors::ISector *sectors[10];

    AutoBlockSector(
            locoNetAddress_t id,
            uint8_t length,
            Signals::ISignal *entrySignalRef,
            Signals::ISignal *exitSignalRef,
            Sectors::ISector *sectors[10]
    ) : entrySignal(entrySignalRef), exitSignal(exitSignalRef), length(length), LocoNetObject(id) {
        this->state = AB_SECTOR_STATE_UNDEFINED;
        this->error = 0;
        this->active = true;
        this->fullBlockConditionActive = true;
        for (int i = 0; i < length; i++) {
            this->sectors[i] = sectors[i];
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

private:
    getABSignal() {
        if (!this->getActive()) {
            return 13;
        }
        if (this->getError()) {
            return Signals::SIGNAL_STATE_SIGNAL_STOJ;
        }

        if (this->getState() == AB_SECTOR_STATE_FREE) {
            return Signals::signalStrategy(this->exitSignal->getState());
        } else {
            return Signals::SIGNAL_STATE_SIGNAL_STOJ;
        }
    };

    ABSectorState_t getABSectorState() {
        if (!this->getActive()) {
            return this->getState();
        }
        int8_t newState = AB_SECTOR_STATE_FREE;

        for (int i = 0; i < this->length; i++) {
            if (this->sectors[i]->getState() != Sectors::STATE_FREE) {
                newState = AB_SECTOR_STATE_OCCUPIED;
            }
        }
        return newState;
    };
public:
    void clock() {

        ABSectorState_t newState = this->getABSectorState();
        this->setState(newState);

        uint8_t newEntrySignalId = this->getABSignal();
        if (this->entrySignal->getState() != newEntrySignalId) {
            this->entrySignal->setState(newEntrySignalId);
        }
    }

public:
    void setState(ABSectorState_t newState) {
        if (this->getState() != newState) {
            // zhoď na stoj
            if (newState == AB_SECTOR_STATE_OCCUPIED) {
                this->state = AB_SECTOR_STATE_OCCUPIED;
            }
            if (newState == AB_SECTOR_STATE_FREE) {
                // uvolnenie sektoru

                if ((this->exitSignal->getState() == Signals::SIGNAL_STATE_SIGNAL_STOJ &&
                     this->getState() == AB_SECTOR_STATE_OCCUPIED)
                    || !this->getFullBlockConditionActive()) {
                    this->state = AB_SECTOR_STATE_FREE;
                } else {
                    this->setError(AutoBlockSector::ERROR_FULL_BLOCK_CONDITION);
                }
            }
            this->dumpState();
        }

    }

    ABSectorState_t getState() {
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
        this->state = AB_SECTOR_STATE_FREE;
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
        Serial.print(this->getLocoNetId());
        Serial.print(":s:");
        Serial.println(this->state);
    }

    void dumpFullBlockConditionActive() {
        Serial.print(this->getLocoNetId());
        Serial.print(":c:");
        Serial.println(this->fullBlockConditionActive);
    }

    void dumpActive() {
        Serial.print(this->getLocoNetId());
        Serial.print(":a:");
        Serial.println(this->active);
    }

    void dumpError() {
        Serial.print(this->getLocoNetId());
        Serial.print(":e:");
        Serial.println(this->error);
    }

};

#endif //KOLAJISKO_AUTOBLOCKSECTOR_H
