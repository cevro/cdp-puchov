#include "SectorRef.h"
#include "SignalRef.h"
#include "AutoBlockSector.h"

typedef SectorRef SectorRefs[10];

typedef Signal SignalRefs[6];


class OneSideAutoBlock {
public:
    int id;
    bool active;
    int sectors[10];

    OneSideAutoBlock(int sectors[]) {
        for (int i = 0; i < 10; i++) {
            if (sectors[i]) {
                this->sectors[i] = sectors[i];
            }
        }
    }

};

auto ab1 = OneSideAutoBlock((int[]) {1, 2, 3});


/***** Define sectors *****/
auto sector1 = SectorRef(1);
auto sector2 = SectorRef(2);
auto sector3 = SectorRef(3);
auto sector4 = SectorRef(4);
auto sector5 = SectorRef(5);
auto sector6 = SectorRef(6);
auto sector7 = SectorRef(7);
auto sector8 = SectorRef(8);
auto sector9 = SectorRef(9);
auto sector10 = SectorRef(10);


SectorRefs sectors = {sector1, sector2, sector3, sector4, sector5, sector6, sector7, sector8, sector9, sector10};

/***** Define signals *****/

auto signal1 = Signal(7, 1);
auto signal2 = Signal(8, 2);
auto signal3 = Signal(9, 3);
auto signal4 = Signal(10, 4);
auto signal5 = Signal(11, 5);
auto signal6 = Signal(12, 6);

SignalRefs signals = {signal1, signal2, signal3, signal4, signal5, signal6};

AutoBlockSector ABSector1 = AutoBlockSector(1, 2, 1, 2, (int[]) {1, 2});
AutoBlockSector ABSector2 = AutoBlockSector(2, 2, 2, 3, (int[]) {3, 4});
AutoBlockSector ABSector3 = AutoBlockSector(3, 1, 3, 4, (int[]) {5});
//AutoBlockSector ABSector4 = AutoBlockSector(4, 3, 4, 5, (int[]) {6.7, 8});
//AutoBlockSector ABSector5 = AutoBlockSector(5, 2, 5, 6, (int[]) {9, 10});

AutoBlockSector ABSectors[] = {ABSector1, ABSector2, ABSector3,/* ABSector4, ABSector5*/};


Signal &getSignal(int id) {
    for (auto &signal: signals) {
        if (signal.id == id) {
            return signal;
        }
    }
};

AutoBlockSector &getAutoBlockSector(int id) {
    for (auto &sector: ABSectors) {
        if (sector.id == id) {
            return sector;
        }
    }
};

SectorRef getSector(int id) {
    for (auto &sector: sectors) {
        if (sector.id == id) {
            return sector;
        }
    }
    // throw 1;
};


void sendState() {
    for (auto &signal: signals) {
        signal.sendState();
    }
    for (auto &sector: sectors) {
        sector.sendState();
    }
    for (auto &ABSector: ABSectors) {
        ABSector.sendState();
    }
};

void handleSignalChange(int id, int state) {
    for (auto &signal: signals) {
        if (signal.id == id) {
            signal.setState(state);
        }
    }
    return;

};

void handleSectorChange(int id, int state) {
    for (auto &sector: sectors) {
        if (sector.id == id) {
            sector.setState(state);
        }
    }
    return;
};

void handleChangeAutoBlock(int id, int state) {
    if (status == 1) {
        for (int i = 0; i < 10; i++) {
            if (ab1.sectors[i] == 0) {
                break;
            }
            getAutoBlockSector(ab1.sectors[i]).active = true;
        }
    } else if (status == 0) {
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

void setup() {
    Serial.begin(115200);
    while (!Serial) { ;
    }
    sendState();
}

char tmp[10];
const auto a = (int[]) {1, 2};

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
            int address = String(results[1]).toInt();
            int status = String(results[2]).toInt();
            switch (results[0][0]) {
                case 's':
                    handleSignalChange(address, status);
                    sendState();
                    break;
                case 'o':
                    handleSectorChange(address, status);
                    sendState();
                    break;
                case 'a':
                    handleChangeAutoBlock(address, status);
                    sendState();
                    break;
            }
        }
    }

    for (auto &ABSector: ABSectors) {

        Signal &entrySignal = getSignal(ABSector.entrySignalId);
        Signal &exitSignal = getSignal(ABSector.exitSignalId);
        // Serial.println(ABSector.active);
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
                if (newState == AutoBlockSector::STATE_OCCUPIED) {
                    entrySignal.setState(SignalRef::SIGNAL_STOJ);
                    ABSector.state = AutoBlockSector::STATE_OCCUPIED;
                } else {
                    if (exitSignal.state == SignalRef::SIGNAL_STOJ) {
                        ABSector.state = AutoBlockSector::STATE_FREE;
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
