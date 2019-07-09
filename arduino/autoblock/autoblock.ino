#include "./libs/SectorRef.h"
#include "./libs/SignalRef.h"
#include "libs/Signal/Signal.h"
#include "./libs/AutoBlockSector.h"
#include "./libs/OneSideAutoBlock.h"

using namespace Signal;

typedef SectorRef SectorRefs[30];

typedef Signal::Signal SignalRefs[42];
typedef OneSideAutoBlock OneSideABRefs[4];

class BanalizedAutoBlock {
public:
    int id;
    int mainId;
    int auxId;
    int dir;

    BanalizedAutoBlock(int id, int mainId, int auxId) : id(id), mainId(mainId), auxId(auxId) {
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

};

auto ab1 = BanalizedAutoBlock(451, 401, 403);
auto ab2 = BanalizedAutoBlock(450, 404, 402);

BanalizedAutoBlock ABs[] = {ab1, ab2};

auto ab1S = OneSideAutoBlock(401, 9, (int[]) {717,701, 703, 705, 707, 709, 711, 713, 715});
auto ab2S = OneSideAutoBlock(402, 9, (int[]) {716,700, 702, 704, 706, 708, 710, 712, 714});

auto ab1L = OneSideAutoBlock(403, 10, (int[]) {739,721, 723, 725, 727, 729, 731, 733, 735, 737});
auto ab2L = OneSideAutoBlock(404, 10, (int[]) {738,720, 722, 724, 726, 728, 730, 732, 734, 736});

OneSideABRefs oneSideAutoBlocks = {ab1S, ab2S, ab1L, ab2L};

/***** Define sectors *****/
auto sector1 = SectorRef(101);
auto sector2 = SectorRef(102);
auto sector3 = SectorRef(103);
auto sector4 = SectorRef(104);
auto sector5 = SectorRef(105);
auto sector6 = SectorRef(106);
auto sector7 = SectorRef(107);
auto sector8 = SectorRef(108);
auto sector9 = SectorRef(109);
auto sector10 = SectorRef(110);

auto sector11 = SectorRef(111);
auto sector12 = SectorRef(112);
auto sector13 = SectorRef(113);
auto sector14 = SectorRef(114);
auto sector15 = SectorRef(115);
auto sector16 = SectorRef(116);
auto sector17 = SectorRef(117);
auto sector18 = SectorRef(118);
auto sector19 = SectorRef(119);
auto sector20 = SectorRef(120);

auto sector21 = SectorRef(121);
auto sector22 = SectorRef(122);
auto sector23 = SectorRef(123);
auto sector24 = SectorRef(124);
auto sector25 = SectorRef(125);
auto sector26 = SectorRef(126);
auto sector27 = SectorRef(127);
auto sector28 = SectorRef(128);

auto sector29 = SectorRef(129);
auto sector30 = SectorRef(130);


SectorRefs sectors = {
        sector1, sector2, sector3, sector4, sector5, sector6, sector7, sector8, sector9, sector10,
        sector11, sector12, sector13, sector14, sector15, sector16, sector17, sector18, sector19, sector20,
        sector21, sector22, sector23, sector24, sector25, sector26, sector27, sector28, sector29, sector30
};

/***** Define signals *****/

auto signal0 = Signal::Signal(13, 500);
auto signal1 = Signal::Signal(7, 501);
auto signal2 = Signal::Signal(13, 502);
auto signal3 = Signal::Signal(8, 503);
auto signal4 = Signal::Signal(13, 504);

auto signal5 = Signal::Signal(9, 505);
auto signal6 = Signal::Signal(13, 506);
auto signal7 = Signal::Signal(10, 507);
auto signal8 = Signal::Signal(13, 508);
auto signal9 = Signal::Signal(11, 509);

auto signal10 = Signal::Signal(13, 510);
auto signal11 = Signal::Signal(12, 511);
auto signal12 = Signal::Signal(13, 512);
auto signal13 = Signal::Signal(13, 513);
auto signal14 = Signal::Signal(13, 514);

auto signal15 = Signal::Signal(13, 515);
auto signal16 = Signal::Signal(13, 516);
auto signal17 = Signal::Signal(13, 517);
auto signal18 = Signal::Signal(13, 518);
auto signal19 = Signal::Signal(13, 519);

auto signal20 = Signal::Signal(13, 520);
auto signal21 = Signal::Signal(13, 521);
auto signal22 = Signal::Signal(13, 522);
auto signal23 = Signal::Signal(13, 523);
auto signal24 = Signal::Signal(13, 524);

auto signal25 = Signal::Signal(13, 525);
auto signal26 = Signal::Signal(13, 526);
auto signal27 = Signal::Signal(13, 527);
auto signal28 = Signal::Signal(13, 528);
auto signal29 = Signal::Signal(13, 529);

auto signal30 = Signal::Signal(13, 530);
auto signal31 = Signal::Signal(13, 531);
auto signal32 = Signal::Signal(13, 532);
auto signal33 = Signal::Signal(13, 533);
auto signal34 = Signal::Signal(13, 534);

auto signal35 = Signal::Signal(13, 535);
auto signal36 = Signal::Signal(13, 536);
auto signal37 = Signal::Signal(13, 537);

auto signal40 = Signal::Signal(13, 540);
auto signal41 = Signal::Signal(13, 541);

auto signal42 = Signal::Signal(13, 542);
auto signal43 = Signal::Signal(13, 543);


SignalRefs signals = {
        signal0, signal1, signal2, signal3, signal4,
        signal5, signal6, signal7, signal8, signal9,

        signal10, signal11, signal12, signal13, signal14,
        signal15, signal16, signal17, signal18, signal19,

        signal20, signal21, signal22, signal23, signal24,
        signal25, signal26, signal27, signal28, signal29,

        signal30, signal31, signal32, signal33, signal34,
        signal35, signal36, signal37,

        signal40,signal41,signal42,signal43
};

auto ABSector1S_0 = AutoBlockSector(717, 1, 541, 501, (int[]) {129});
auto ABSector2S_0 = AutoBlockSector(716, 1, 540, 500, (int[]) {130});

auto ABSector1S_1 = AutoBlockSector(701, 1, 501, 503, (int[]) {127});
auto ABSector2S_1 = AutoBlockSector(700, 1, 500, 502, (int[]) {128});

auto ABSector1S_2 = AutoBlockSector(703, 1, 503, 505, (int[]) {125});
auto ABSector2S_2 = AutoBlockSector(702, 1, 502, 504, (int[]) {126});

auto ABSector1S_3 = AutoBlockSector(705, 2, 505, 507, (int[]) {123, 121});
auto ABSector2S_3 = AutoBlockSector(704, 2, 504, 506, (int[]) {124, 122});

auto ABSector1S_4 = AutoBlockSector(707, 2, 507, 509, (int[]) {119, 117});
auto ABSector2S_4 = AutoBlockSector(706, 2, 506, 508, (int[]) {120, 118});

auto ABSector1S_5 = AutoBlockSector(709, 2, 509, 511, (int[]) {115, 113});
auto ABSector2S_5 = AutoBlockSector(708, 2, 508, 510, (int[]) {116, 114});

auto ABSector1S_6 = AutoBlockSector(711, 2, 511, 513, (int[]) {111, 109});
auto ABSector2S_6 = AutoBlockSector(710, 2, 510, 512, (int[]) {112, 110});

auto ABSector1S_7 = AutoBlockSector(713, 2, 513, 515, (int[]) {107, 105});
auto ABSector2S_7 = AutoBlockSector(712, 2, 512, 514, (int[]) {108, 106});

auto ABSector1S_8 = AutoBlockSector(715, 2, 515, 517, (int[]) {103, 101});
auto ABSector2S_8 = AutoBlockSector(714, 2, 514, 516, (int[]) {104, 102});


auto ABSector1L_0 = AutoBlockSector(739, 1, 543, 519, (int[]) {101});
auto ABSector2L_0 = AutoBlockSector(738, 1, 542, 518, (int[]) {102});

auto ABSector1L_1 = AutoBlockSector(721, 2, 519, 521, (int[]) {103, 105});
auto ABSector2L_1 = AutoBlockSector(720, 2, 518, 520, (int[]) {104, 106});

auto ABSector1L_2 = AutoBlockSector(723, 2, 521, 523, (int[]) {107, 109});
auto ABSector2L_2 = AutoBlockSector(722, 2, 520, 522, (int[]) {108, 110});

auto ABSector1L_3 = AutoBlockSector(725, 2, 523, 525, (int[]) {111, 113});
auto ABSector2L_3 = AutoBlockSector(724, 2, 522, 524, (int[]) {112, 114});

auto ABSector1L_4 = AutoBlockSector(727, 2, 525, 527, (int[]) {115, 117});
auto ABSector2L_4 = AutoBlockSector(726, 2, 524, 526, (int[]) {116, 118});

auto ABSector1L_5 = AutoBlockSector(729, 1, 527, 529, (int[]) {119});
auto ABSector2L_5 = AutoBlockSector(728, 1, 526, 528, (int[]) {118});

auto ABSector1L_6 = AutoBlockSector(731, 1, 529, 531, (int[]) {121});
auto ABSector2L_6 = AutoBlockSector(730, 1, 528, 530, (int[]) {122});

auto ABSector1L_7 = AutoBlockSector(733, 1, 531, 533, (int[]) {123, 125});
auto ABSector2L_7 = AutoBlockSector(732, 1, 530, 532, (int[]) {124, 126});

auto ABSector1L_8 = AutoBlockSector(735, 1, 533, 535, (int[]) {127});
auto ABSector2L_8 = AutoBlockSector(734, 1, 532, 534, (int[]) {128});

auto ABSector1L_9 = AutoBlockSector(737, 1, 535, 537, (int[]) {129});
auto ABSector2L_9 = AutoBlockSector(736, 1, 534, 536, (int[]) {130});

AutoBlockSector ABSectors[] = {
ABSector1S_0,ABSector2S_0,
        ABSector1S_1, ABSector2S_1,
        ABSector1S_2, ABSector2S_2,
        ABSector1S_3, ABSector2S_3,
        ABSector1S_4, ABSector2S_4,
        ABSector1S_5, ABSector2S_5,
        ABSector1S_6, ABSector2S_6,
        ABSector1S_7, ABSector2S_7,
        ABSector1S_8, ABSector2S_8,

ABSector1L_0,ABSector2L_0,
        ABSector1L_1, ABSector2L_1,
        ABSector1L_2, ABSector2L_2,
        ABSector1L_3, ABSector2L_3,
        ABSector1L_4, ABSector2L_4,
        ABSector1L_5, ABSector2L_5,
        ABSector1L_6, ABSector2L_6,
        ABSector1L_7, ABSector2L_7,
        ABSector1L_8, ABSector2L_8,
        ABSector1L_9, ABSector2L_9,
};

/**
 *
 * @param id
 * @return
 */
Signal::Signal &getSignal(int id) {
    for (auto &signal: signals) {
        if (signal.getId() == id) {
            return signal;
        }
    }
};

/**
 *
 * @param id
 * @return
 */
AutoBlockSector &getAutoBlockSector(int id) {
    for (auto &sector: ABSectors) {
        if (sector.getId() == id) {
            return sector;
        }
    }
};

/**
 *
 * @param id
 * @return
 */
SectorRef getSector(int id) {
    for (auto &sector: sectors) {
        if (sector.getId() == id) {
            return sector;
        }
    }
    // throw 1;
};

/**
 *
 * @param id
 * @return
 */
OneSideAutoBlock &getOneSideAutoBlock(int id) {
    for (auto &oneSideAutoBlock: oneSideAutoBlocks) {
        if (oneSideAutoBlock.getId() == id) {
            return oneSideAutoBlock;
        }
    }
    // throw 1;
};

/**
 *
 */
void sendState() {
    /*for (auto &signal: signals) {
        signal.dump();
    }*/
    for (auto &sector: sectors) {
        sector.dump();
    }
    for (auto &ABSector: ABSectors) {
        ABSector.dump();
    }
    /*  for (int i = 0; i < 20; ++i) {
          objects[i]->dump();
      }*/
    return;
};

/**
 *
 * @param id
 * @param cmd
 * @param value
 */
void handleCmd(int id, char cmd, int value) {
    /*for (int i = 0; i < 20; ++i) {
        if (objects[i]->getId() == id) {
            objects[i]->handleCmd(cmd, value);
        }
    }
    return;*/

    // Signals
    for (auto &signal: signals) {
        if (signal.getId() == id) {
            signal.handleCmd(cmd, value);
        }
    }

    for (auto &sector: sectors) {
        if (sector.getId() == id) {
            sector.handleCmd(cmd, value);
        }
    }
    for (auto &ABSector: ABSectors) {
        if (ABSector.getId() == id) {
            ABSector.handleCmd(cmd, value);
        }
    }
    handleChangeAutoBlock(id, cmd, value);
    /* for (auto &OneSideAutoBlock: OneSideAutoBlocks) {
             if (ABSector.getId() == id) {
                 ABSector.handleCmd(cmd, value);
             }
         }*/
    return;
}

/**
 *
 * @param id
 * @param cmd
 * @param value
 */
void handleChangeAutoBlock(int id, char cmd, int value) {

    for (auto &banalizedAB: ABs) {
        if (banalizedAB.id == id) {
            if (cmd == 'l') {
                if (value) {
                    banalizedAB.lock();
                } else {
                    banalizedAB.unlock();
                }
                return;
            }
            if (banalizedAB.dir == value) {
                return;
            }
            if (!(value == -1 || value == 1)) {
                return;
            }

            OneSideAutoBlock &activeOAB = getOneSideAutoBlock((value == -1) ? banalizedAB.auxId : banalizedAB.mainId);
            OneSideAutoBlock &inactiveOAB = getOneSideAutoBlock((value == -1) ? banalizedAB.mainId : banalizedAB.auxId);

            bool canChange = true;
            for (int i = 0; i < 20; i++) {
                if (inactiveOAB.sectors[i] == 0) {
                    break;
                }
                canChange =
                        canChange &&
                        (getAutoBlockSector(inactiveOAB.sectors[i]).getState() == AutoBlockSector::STATE_FREE);
            }

            if (!canChange) {
                Serial.println('cannnot change');
                return;
            }

            for (int i = 0; i < 20; i++) {
                if (inactiveOAB.sectors[i] == 0) {
                    break;
                }
                getAutoBlockSector(inactiveOAB.sectors[i]).setActive(false);
            }
            for (int i = 0; i < 20; i++) {
                if (activeOAB.sectors[i] == 0) {
                    break;
                }
                getAutoBlockSector(activeOAB.sectors[i]).setActive(true);


            }
            banalizedAB.dir = value;
            banalizedAB.dump();
        }
    }
}

/**
 *
 */
void setup() {
    Serial.begin(115200);
    while (!Serial) { ;
    }

    for (auto &AB: ABs) {
        auto &oneSideAutoBlock = getOneSideAutoBlock(AB.auxId);
        for (int i = 0; i < 20; i++) {
            if (oneSideAutoBlock.sectors[i] == 0) {
                break;
            }
            getAutoBlockSector(oneSideAutoBlock.sectors[i]).setActive(false);
        }
    }

    sendState();
    for (auto &signal: signals) {
        signal.dump();
    }
    for (auto &banalizedAB: ABs) {
        banalizedAB.dump();
    }


}


int8_t getABSectorState(AutoBlockSector ABSector) {
    if (!ABSector.getActive()) {
        return AutoBlockSector::STATE_INACTIVE;
    }
    int8_t newState = AutoBlockSector::STATE_FREE;

    for (int i = 0; i < ABSector.length; i++) {
        if (ABSector.sectorIds[i] == 0) {
            break;
        }
        SectorRef sector = getSector(ABSector.sectorIds[i]);
        if (sector.getState() != SectorRef::STATE_FREE) {
            newState = AutoBlockSector::STATE_OCCUPIED;
        }
    }
    return newState;
}

/*
void changeABState(AutoBlockSector ABSector, Signal::Signal exitSignal, int8_t newState) {
    if (ABSector.getState() == newState) {
        return;
    }
    // zhoď na stoj
    if (newState == AutoBlockSector::STATE_OCCUPIED) {
        ABSector.setState(AutoBlockSector::STATE_OCCUPIED);
    }
    if (newState == AutoBlockSector::STATE_FREE) {
        // uplna blocková podmienka
        if ((exitSignal.state == SignalRef::SIGNAL_STOJ &&
             ABSector.getState() == AutoBlockSector::STATE_OCCUPIED)
            || !ABSector.getFullBlockConditionActive()) {
            ABSector.setState(AutoBlockSector::STATE_FREE);
        } else {
            ABSector.setError(AutoBlockSector::ERROR_FULL_BLOCK_CONDITION);
        }
    }
    ABSector.dump();

}

*/
uint8_t getABSignal(AutoBlockSector ABSector, Signal::Signal exitSignal) {
    if (!ABSector.getActive()) {
        return 13;
    }
    if (ABSector.getError()) {
        return SignalRef::SIGNAL_STOJ;
    }

    if (ABSector.getState() == AutoBlockSector::STATE_FREE) {
        return SignalRef::signalStrategy(exitSignal.state);
    } else {
        return SignalRef::SIGNAL_STOJ;
    }
}


char tmp[10];

/**
 *
 */
void loop() {
    unsigned long start = micros();
    memset(tmp, 0, sizeof(tmp));
    if (Serial.available()) {
        Serial.readBytes(tmp, 10);
        if (String(tmp).length() > 0) {
            char *data = strtok(tmp, ":");
            char *results[3];
            memset(results, 0, sizeof(results));
            int i = 0;
            while (data != NULL) {
                results[i] = data;
                i++;
                data = strtok(NULL, ":");
            }
            int address = String(results[0]).toInt();
            int status = String(results[2]).toInt();
            char cmd = results[1][0];
            handleCmd(address, cmd, status);
            //sendState();
        }
    }

    for (auto &ABSector: ABSectors) {

        Signal::Signal &entrySignal = getSignal(ABSector.entrySignalId);
        Signal::Signal &exitSignal = getSignal(ABSector.exitSignalId);


        int8_t newState = getABSectorState(ABSector);
// vyhodnoť a ulož stav
        if (ABSector.getState() != newState) {
            // zhoď na stoj
            if (newState == AutoBlockSector::STATE_OCCUPIED) {
                ABSector.setState(AutoBlockSector::STATE_OCCUPIED);
            }
            if (newState == AutoBlockSector::STATE_FREE) {
                // uvolnenie sektoru

                if ((exitSignal.state == SignalRef::SIGNAL_STOJ &&
                     ABSector.getState() == AutoBlockSector::STATE_OCCUPIED)
                    || !ABSector.getFullBlockConditionActive() ||
                    ABSector.getState() == AutoBlockSector::STATE_INACTIVE) {
                    ABSector.setState(AutoBlockSector::STATE_FREE);
                } else {
                    ABSector.setError(AutoBlockSector::ERROR_FULL_BLOCK_CONDITION);
                }
            }
            if (newState == AutoBlockSector::STATE_INACTIVE) {
                ABSector.setState(AutoBlockSector::STATE_INACTIVE);
                ABSector.setError(0);
            }
        }


        uint8_t newEntrySignalId = getABSignal(ABSector, exitSignal);

        if (entrySignal.state != newEntrySignalId) {
            entrySignal.setState(newEntrySignalId);
        }

    }

    for (auto &signal: signals) {
        signal.clock();
    }
    unsigned long end = micros();
    /*  Serial.println(start);
      Serial.println(end);
      Serial.println(end - start);
      Serial.println("---");*/

    delay(10);

}
