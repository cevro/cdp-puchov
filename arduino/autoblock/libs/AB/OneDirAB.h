#ifndef ARDUINO_ONESIDEAUTOBLOCK_H
#define ARDUINO_ONESIDEAUTOBLOCK_H

#include "../LocoNetObject.h"
#include "IABSector.h"
#include "IOneDirAB.h"

namespace AutomaticBlock {

    template<uint8_t L>
    class OneDirAB : public IOneDirAB {
    public:
        IABSector *sectors[L];

        OneDirAB(locoNetAddress_t
                 id,
                 IABSector *sectors[]
        ) :
                IOneDirAB(id) {
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
