//
// Created by miso on 3.7.2019.
//

#ifndef ARDUINO_ISECTOR_H
#define ARDUINO_ISECTOR_H

class ISector {

public:
    static const int STATE_OCCUPIED = 2;
    static const int STATE_FREE = 1;
    static const int STATE_UNDEFINED = -1;
    int locoNetId;

};

#endif //ARDUINO_ISECTOR_H
