#include "ISector.h"

#ifndef ARDUINO_SECTORREF_H
#define ARDUINO_SECTORREF_H

namespace Sectors {
    class SectorRef : public ISector {


    public:
        SectorRef(locoNetAddress_t id) : ISector(id) {
            this->state = Sectors::STATE_UNDEFINED;
        }

    public:
        void setState(int8_t receivedState) {
            this->state = receivedState;
            this->dumpState();
        }


    public:
        void handleCmd(char cmd, int value) {
            switch (cmd) {
                case 's':
                    this->setState(value);
            }
        }

    public:
        void dump() {
            this->dumpState();
        }

        /**
         * @deprecated
         */
        void dumpState() {
            Serial.print(this->locoNetId);
            Serial.print(":s:");
            Serial.println(this->state);
        }
    };
};

#endif //ARDUINO_SECTORREF_H
