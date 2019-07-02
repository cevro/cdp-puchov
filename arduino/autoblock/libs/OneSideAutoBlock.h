//
// Created by miso on 1.7.2019.
//

#ifndef ARDUINO_ONESIDEAUTOBLOCK_H
#define ARDUINO_ONESIDEAUTOBLOCK_H

class OneSideAutoBlock {
public:
    int id;
    bool active;
    int sectors[10];

    OneSideAutoBlock(int id, int sectors[]) : id(id) {

        for (int i = 0; i < 10; i++) {
            if (sectors[i]) {
                this->sectors[i] = sectors[i];
            }
        }
    }

public:
    int getId() {
        return this->id;
    }
};

#endif //ARDUINO_ONESIDEAUTOBLOCK_H
