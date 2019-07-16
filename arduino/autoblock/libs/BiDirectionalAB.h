#ifndef HELLO_WORLD_BIDIRECTIONALAB_H
#define HELLO_WORLD_BIDIRECTIONALAB_H

#include "OneSideAutoBlock.h"
#include "LocoNetObject.h"

class BiDirectionalAB : public LocoNetObject {
public:
    OneSideAutoBlock &mainAB;
    OneSideAutoBlock &auxAB;
public:
    int8_t dir;

    BiDirectionalAB(int id, OneSideAutoBlock &mainAB, OneSideAutoBlock &auxAB) :
            LocoNetObject(id),
            mainAB(mainAB),
            auxAB(auxAB) {
        this->dir = 1;
    };

public:
    void init() {
        for (int i = 0; i < 20; i++) {
            if (this->auxAB.sectors[i] == 0) {
                break;
            }
            this->auxAB.sectors[i]->setActive(false);
        }
    }

private:
    bool locked;
public:
    void lock() {
        this->locked = true;
        this->dumpLocked();
    }

    bool isLocked() {
        return this->locked;
    }

    void unlock() {
        this->locked = false;
        this->dumpLocked();
    }

public:
    void dump() {
        this->dumpLocked();
        this->dumpDir();
    }

    void dumpDir() {
        Serial.print(this->getLocoNetId());
        Serial.print(":d:");
        Serial.println(this->dir);
    }

    void dumpLocked() {
        Serial.print(this->getLocoNetId());
        Serial.print(":l:");
        Serial.println(this->locked);
    }

    void handleCmd(char cmd, int value) {
        switch (cmd) {
            case 'l':
                if (value) {
                    this->lock();
                } else {
                    this->unlock();
                }
                break;

            case 'd':
                return this->changeDir(value);

        }
        return;
    }

private:
    void changeDir(int value) {
        if (this->dir == value) {
            return;
        }
        if (!(value == -1 || value == 1)) {
            return;
        }

        OneSideAutoBlock &activeOAB =
                (value == -1) ? this->auxAB : this->mainAB;
        OneSideAutoBlock &inactiveOAB =
                (value == -1) ? this->mainAB : this->auxAB;

        bool canChange = true;
        for (int i = 0; i < 20; i++) {
            if (inactiveOAB.sectors[i] == 0) {
                break;
            }
            canChange =
                    canChange &&
                    (inactiveOAB.sectors[i]->getState() == AB_SECTOR_STATE_FREE);
        }
        canChange = canChange && !this->isLocked();

        if (!canChange) {
            Serial.println('cannnot change');
            return;
        }

        for (int i = 0; i < 20; i++) {
            if (inactiveOAB.sectors[i] == 0) {
                break;
            }
            inactiveOAB.sectors[i]->setActive(false);
        }
        for (int i = 0; i < 20; i++) {
            if (activeOAB.sectors[i] == 0) {
                break;
            }
            activeOAB.sectors[i]->setActive(true);


        }
        this->dir = value;
        this->dump();
    }

public:
    void clock() {};
};

#endif //HELLO_WORLD_BIDIRECTIONALAB_H
