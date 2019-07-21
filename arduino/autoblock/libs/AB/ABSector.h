
#ifndef KOLAJISKO_AUTOBLOCKSECTOR_H
#define KOLAJISKO_AUTOBLOCKSECTOR_H

#include "../Signal/Signal.h"
#include "../Signal/consts.h"
#include "../LocoNetObject.h"
#include "../Sectors/ISector.h"
#include "IABSector.h"

typedef int8_t ABSectorState_t;


namespace AutomaticBlock {

    template<uint8_t L>
    class ABSector : public IABSector {
    public:

        Sectors::ISector *sectors[L];

        ABSector(
                locoNetAddress_t id,
                Signals::ISignal *entrySignalRef,
                Signals::ISignal *exitSignalRef,
                Sectors::ISector *sectors[L]
        ) : IABSector(id) {
            this->entrySignal = entrySignalRef;
            this->exitSignal = exitSignalRef;
            for (int i = 0; i < L; i++) {
                this->sectors[i] = sectors[i];
            }
        };


    private:
        ABSectorState_t getABSectorState() {
            if (!this->getActive()) {
                return this->getState();
            }
            int8_t newState = AB_SECTOR_STATE_FREE;

            for (int i = 0; i < L; i++) {
                if (!this->sectors[i]->isFree()) {
                    newState = AB_SECTOR_STATE_OCCUPIED;
                }
            }
            return newState;
        };


    };
};

#endif //KOLAJISKO_AUTOBLOCKSECTOR_H
