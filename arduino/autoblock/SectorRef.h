#ifndef ARDUINO_SECTORREF_H
#define ARDUINO_SECTORREF_H


class SectorRef {
public:
    static const int STATE_OCCUPIED = 1;
    static const int STATE_FREE = 0;
public:
    int id;
private:
    int state;
public:
    SectorRef(int id) {
        this->id = id;
        this->state = 0;
    }

public:
    void setState(int receivedState) {
        this->state = receivedState;
        this->sendState();
    }

public:
    int getState() {
        return this->state;
    }

public:
    void sendState() {
        Serial.print("o:");
        Serial.print(this->id);
        Serial.print(":");
        Serial.println(this->state);
    }
};

#endif //ARDUINO_SECTORREF_H
