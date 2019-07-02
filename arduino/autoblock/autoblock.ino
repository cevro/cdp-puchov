#include "./libs/SectorRef.h"
#include "./libs/SignalRef.h"
#include "./libs/Signal.h"
#include "./libs/AutoBlockSector.h"
#include "./libs/OneSideAutoBlock.h"

typedef SectorRef SectorRefs[10];

typedef Signal SignalRefs[6];

auto ab1 = OneSideAutoBlock(401, (int[]) {701, 702, 703});

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

SectorRefs sectors = {sector1, sector2, sector3, sector4, sector5, sector6, sector7, sector8, sector9, sector10};

/***** Define signals *****/

auto signal1 = Signal(7, 501);
auto signal2 = Signal(8, 502);
auto signal3 = Signal(9, 503);
auto signal4 = Signal(10, 504);
auto signal5 = Signal(11, 505);
auto signal6 = Signal(12, 506);

SignalRefs signals = {signal1, signal2, signal3, signal4, signal5, signal6};

AutoBlockSector ABSector1 = AutoBlockSector(701, 2, 501, 502, (int[]) {101, 102});
AutoBlockSector ABSector2 = AutoBlockSector(702, 2, 502, 503, (int[]) {103, 104});
AutoBlockSector ABSector3 = AutoBlockSector(703, 1, 503, 504, (int[]) {105});
//AutoBlockSector ABSector4 = AutoBlockSector(4, 3, 4, 5, (int[]) {6.7, 8});
//AutoBlockSector ABSector5 = AutoBlockSector(5, 2, 5, 6, (int[]) {9, 10});

AutoBlockSector ABSectors[] = {ABSector1, ABSector2, ABSector3,/* ABSector4, ABSector5*/};

//ObjectDump *objects = new ObjectDump [20];/*{
/*&sector1*/
/*sector2, sector3, sector4, sector5, sector6, sector7, sector8, sector9, sector10,
        signal1, signal2, signal3, signal4, signal5, signal6,
        ABSector1, ABSector2, ABSector3,
        ab1
};*/

/**
 *
 * @param id
 * @return
 */
Signal &getSignal(int id) {
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
 */
void sendState() {
    for (auto &signal: signals) {
        signal.dump();
    }
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
            ABSector.dump();
        }
    }
    return;
}

/**
 *
 * @param id
 * @param cmd
 * @param value
 */
void handleChangeAutoBlock(int id, char cmd, int value) {

    if (value == 1) {
        for (int i = 0; i < 10; i++) {
            if (ab1.sectors[i] == 0) {
                break;
            }
            getAutoBlockSector(ab1.sectors[i]).active = true;
        }
    } else if (value == 0) {
        bool canChange = true;
        for (int i = 0; i < 10; i++) {
            if (ab1.sectors[i] == 0) {
                break;
            }
            canChange = canChange && (getAutoBlockSector(ab1.sectors[i]).state == 0);
        }
        if (canChange) {
            for (int i = 0; i < 10; i++) {
                if (ab1.sectors[i] == 0) {
                    break;
                }
                getAutoBlockSector(ab1.sectors[i]).active = false;
            }
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

    //objects[0] = ABSector1;

    sendState();
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
            sendState();
        }
    }

    for (auto &ABSector: ABSectors) {

        Signal &entrySignal = getSignal(ABSector.entrySignalId);
        Signal &exitSignal = getSignal(ABSector.exitSignalId);
        // Serial.println(ABSector.active);
        if (ABSector.error != 0) {
            entrySignal.setState(SignalRef::SIGNAL_STOJ);
        } else {


            if (ABSector.active) {
                int newState = AutoBlockSector::STATE_FREE;

                for (int i = 0; i < ABSector.length; i++) {
                    if (ABSector.sectorIds[i] == 0) {
                        break;
                    }
                    SectorRef sector = getSector(ABSector.sectorIds[i]);
                    if (sector.getState() == SectorRef::STATE_OCCUPIED) {
                        newState = AutoBlockSector::STATE_OCCUPIED;
                    }
                }

                if (ABSector.state == newState) {
                    // do nothing
                } else {
                    // zhoď na stoj
                    if (newState == AutoBlockSector::STATE_OCCUPIED) {
                        entrySignal.setState(SignalRef::SIGNAL_STOJ);
                        ABSector.state = AutoBlockSector::STATE_OCCUPIED;
                    } else {
                        // uvolnenie sektoru
                        if (exitSignal.state == SignalRef::SIGNAL_STOJ) {
                            ABSector.state = AutoBlockSector::STATE_FREE;
                        } else {
                            ABSector.error = AutoBlockSector::ERROR_FULL_BLOCK_CONDITION;
                        }
                    }
                    sendState();
                }
                if (ABSector.state == AutoBlockSector::STATE_FREE) {
                    int signalId = SignalRef::signalStrategy(exitSignal.state);

                    if (signalId != entrySignal.state) {
                        entrySignal.setState(signalId);
                    }
                }
            } else {
                if (entrySignal.state != 13) {
                    entrySignal.setState(13);
                }
            }
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
