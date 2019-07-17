#ifndef HELLO_WORLD_BIDIRECTIONALAB_H
#define HELLO_WORLD_BIDIRECTIONALAB_H

#include "OneSideAutoBlock.h"
#include "../LocoNetObject.h"

namespace AutomaticBlock {
    class BiDirectionalAB : public LocoNetObject {
    public:
        IOneSideAutoBlock *mainAB;
        IOneSideAutoBlock *auxAB;
    public:
        int8_t dir;

        BiDirectionalAB(int id, IOneSideAutoBlock *mainAB, IOneSideAutoBlock *auxAB) :
                LocoNetObject(id),
                mainAB(mainAB),
                auxAB(auxAB) {
            this->dir = 1;
        };

    public:
        void init() {
            this->auxAB->setActive(false);
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

                case 'd':
                    return this->changeDir(value);

            }
            return;
        }

    private:
        void changeDir(int value) {
            if (this->dir == value) {
                return;
            }
            if (!(value == -1 || value == 1)) {
                return;
            }

            IOneSideAutoBlock *activeOAB =
                    (value == -1) ? this->auxAB : this->mainAB;
            IOneSideAutoBlock *inactiveOAB =
                    (value == -1) ? this->mainAB : this->auxAB;

            bool canChange = inactiveOAB->canChange() && !this->isLocked();

            if (!canChange) {
                Serial.println('cannnot change');
                return;
            }

            inactiveOAB->setActive(false);
            activeOAB->setActive(true);

            this->dir = value;
            this->dump();
        }

    public:
        void clock() {};
    };
};

#endif //HELLO_WORLD_BIDIRECTIONALAB_H
