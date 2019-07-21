
#ifndef KOLAJISKO_IONEDIRAB_H
#define KOLAJISKO_IONEDIRAB_H

#include "../LocoNetObject.h"

namespace AutomaticBlock {
    class IOneDirAB : public LocoNetObject {
    public:

        IOneDirAB(locoNetAddress_t id) : LocoNetObject(id) {};

        virtual void setActive(bool a) = 0;

        virtual bool canChange() = 0;
    };
};
#endif //KOLAJISKO_IONEDIRAB_H
