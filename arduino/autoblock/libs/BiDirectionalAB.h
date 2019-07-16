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
        }
        return;
    }

public:
    void clock() {};
};

#endif //HELLO_WORLD_BIDIRECTIONALAB_H
