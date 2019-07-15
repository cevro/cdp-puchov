#ifndef HELLO_WORLD_BIDIRECTIONALAB_H
#define HELLO_WORLD_BIDIRECTIONALAB_H

#include "OneSideAutoBlock.h"

class BiDirectionalAB {
public:
    OneSideAutoBlock &mainAB;
    OneSideAutoBlock &auxAB;
public:
    int id;

    int8_t dir;

    BiDirectionalAB(int id, OneSideAutoBlock &mainAB, OneSideAutoBlock &auxAB) : id(id), mainAB(mainAB), auxAB(auxAB) {
        this->dir = 1;
    };
public:
    void dump() {
        this->dumpLocked();
        this->dumpDir();
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

    void dumpDir() {
        Serial.print(this->id);
        Serial.print(":d:");
        Serial.println(this->dir);
    }

    void dumpLocked() {
        Serial.print(this->id);
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
};

#endif //HELLO_WORLD_BIDIRECTIONALAB_H
