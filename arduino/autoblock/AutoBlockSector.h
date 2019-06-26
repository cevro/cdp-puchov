//
// Created by miso on 27.6.2019.
//

#ifndef KOLAJISKO_AUTOBLOCKSECTOR_H
#define KOLAJISKO_AUTOBLOCKSECTOR_H

class AutoBlockSector {
public:
    static const int STATE_OCCUPIED = 1;
    static const int STATE_FREE = 0;
public:
    bool active;
    int id;
    int state; // 0 FREE 1 obsadeny
    unsigned int length;
    int entrySignalId;
    int exitSignalId;
    int sectorIds[10];

    AutoBlockSector(
            int id,
            int length,
            int entrySignal,
            int exitSignal,
            const int sectors[],
            bool active = true
    ) : entrySignalId(entrySignal), exitSignalId(exitSignal) {
        this->id = id;
        this->length = length;
        this->state = this->STATE_FREE;
        this->active = active;
        for (int i = 0; i < length; i++) {
            this->sectorIds[i] = sectors[i];
        }
    }

    void sendState() {
        Serial.print("b:");
        Serial.print(this->id);
        Serial.print(":");
        Serial.println(this->state);
    }

};

#endif //KOLAJISKO_AUTOBLOCKSECTOR_H
