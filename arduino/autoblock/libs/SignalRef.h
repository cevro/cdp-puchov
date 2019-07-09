#ifndef ARDUINO_SIGNALREF_H
#define ARDUINO_SIGNALREF_H

class SignalRef {
public:
    static const uint8_t SIGNAL_STOJ = 0;
    static const uint8_t SIGNAL_VOLNO = 1;
    static const uint8_t SIGNAL_VYSTRAHA = 2;
    static const uint8_t SIGNAL_OFF = 13;

public:
    int id;
    uint8_t state;

    SignalRef(int signalId) {
        this->id = signalId;
        this->state = 1;
    }

public:
    int getId() {
        return this->id;
    }

public:
    void setState(int receivedState) {
        this->state = receivedState;
        this->sendState();
    }

public:
    void sendState() {
        Serial.print("s:");
        Serial.print(this->id);
        Serial.print(":");
        Serial.println(this->state);
    }

public:
    static int signalStrategy(int endSignalId) {
        switch (endSignalId) {
            case 0:
            case 8:
            case 9:
            case 10:
            case 12:
            case 15:
                return 2;
            case 1:
            case 2:
            case 3:
            case 11:
                return 1;
            case 4:
            case 6:
            case 7:
            case 14:
            case 16:
                return 3;
            default:
                return 0;
        }
    }
};

#endif //ARDUINO_SIGNALREF_H
