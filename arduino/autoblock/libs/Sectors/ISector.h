#ifndef ARDUINO_ISECTOR_H
#define ARDUINO_ISECTOR_H

#include "../LocoNetObject.h"

namespace Sectors {

    typedef int8_t sectorState_t;

    sectorState_t STATE_OCCUPIED = 2;
    sectorState_t STATE_FREE = 1;
    sectorState_t STATE_UNDEFINED = -1;

    class ISector : public LocoNetObject {

    protected:
        sectorState_t state;

    public:
        ISector(locoNetAddress_t locoNetId) : LocoNetObject(locoNetId) {};
    public:
        void clock() {};


    public:
        sectorState_t getState() {
            return this->state;
        }
    };
};

#endif //ARDUINO_ISECTOR_H
