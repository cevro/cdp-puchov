//
// Created by miso on 1.7.2019.
//

#ifndef ARDUINO_STATEOBJECT_H
#define ARDUINO_STATEOBJECT_H

class ObjectDump {
public:
    virtual void dump()=0;

public:
    virtual void handleCmd(char cmd, int value)=0;

public:
    virtual int getId()=0;
};

#endif //ARDUINO_STATEOBJECT_H
