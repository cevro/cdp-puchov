#ifndef ARDUINO_ONESIDEAUTOBLOCK_H
#define ARDUINO_ONESIDEAUTOBLOCK_H

class OneSideAutoBlock {
private:
    int id;
public:
    bool active;
    int sectors[20];

    OneSideAutoBlock(int id, int l, int sectors[]) : id(id) {
        for (int i = 0; i < l; i++) {
            this->sectors[i] = sectors[i];
        }
    }

public:
    int getId() {
        return this->id;
    }
};

#endif //ARDUINO_ONESIDEAUTOBLOCK_H
