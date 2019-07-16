#ifndef ARDUINO_ONESIDEAUTOBLOCK_H
#define ARDUINO_ONESIDEAUTOBLOCK_H

#include "LocoNetObject.h"

class OneSideAutoBlock : public LocoNetObject {
public:
    bool active;
    int sectors[20];

    OneSideAutoBlock(locoNetAddress_t id, int l, int sectors[]) : LocoNetObject(id) {
        for (int i = 0; i < l; i++) {
            this->sectors[i] = sectors[i];
        }
    }

public:
    void handleCmd(char cmd, int val) {};
public:
    void dump() {};
public:
    void clock() {};
};

#endif //ARDUINO_ONESIDEAUTOBLOCK_H
