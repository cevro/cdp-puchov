#ifndef ARDUINO_LOCONET_OBJECT
#define ARDUINO_LOCONET_OBJECT
typedef int locoNetAddress_t;

class LocoNetObject {
protected:
    locoNetAddress_t locoNetId;
public:
    locoNetAddress_t getLocoNetId() {
        return this->locoNetId;
    }

    LocoNetObject(locoNetAddress_t address) {
        this->locoNetId = address;
    }

public:
    virtual void handleCmd(char cmd, int value) = 0;

public:
    virtual void dump() = 0;

public:
    virtual void clock() = 0;
};

#endif
