#ifndef ARDUINO_ISECTOR_H
#define ARDUINO_ISECTOR_H

class ISector {

public:
    ISector(int locoNetId) : locoNetId(locoNetId) {};

public:
    static const int8_t STATE_OCCUPIED = 2;
    static const int8_t STATE_FREE = 1;
    static const int8_t STATE_UNDEFINED = -1;
    int locoNetId;

};

#endif //ARDUINO_ISECTOR_H
