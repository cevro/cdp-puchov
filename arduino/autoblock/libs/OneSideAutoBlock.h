#ifndef ARDUINO_ONESIDEAUTOBLOCK_H
#define ARDUINO_ONESIDEAUTOBLOCK_H

#include "LocoNetObject.h"
#include "AutoBlockSector.h"

class OneSideAutoBlock : public LocoNetObject {
public:
    bool active;
    AutoBlockSector *sectors[20];

    OneSideAutoBlock(locoNetAddress_t id, int l, AutoBlockSector *sectors[]) : LocoNetObject(id) {
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
