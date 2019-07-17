#ifndef ARDUINO_ONESIDEAUTOBLOCK_H
#define ARDUINO_ONESIDEAUTOBLOCK_H

#include "../LocoNetObject.h"
#include "IABSector.h"

namespace AutomaticBlock {
    class IOneSideAutoBlock : public LocoNetObject {
    public:

        IOneSideAutoBlock(locoNetAddress_t id) : LocoNetObject(id) {};

        virtual void setActive(bool a) = 0;

        virtual bool canChange() = 0;
    };

    template<uint8_t L>
    class OneSideAutoBlock : public IOneSideAutoBlock {
    public:
        IAutoBlockSector *sectors[L];

        OneSideAutoBlock(locoNetAddress_t id, IAutoBlockSector *sectors[]) : IOneSideAutoBlock(id) {
            for (int i = 0; i < L; i++) {
                this->sectors[i] = sectors[i];
            }
        }

        void setActive(bool a) {
            for (int i = 0; i < L; i++) {
                this->sectors[i]->setActive(a);
            }
        }

        bool canChange() {
            for (int i = 0; i < L; i++) {
                if (!this->sectors[i]->isFree()) {
                    return false;
                }
            }
            return true;
        };
    public:
        void handleCmd(char cmd, int val) {};
    public:
        void dump() {};
    public:
        void clock() {};
    };


};

#endif //ARDUINO_ONESIDEAUTOBLOCK_H
