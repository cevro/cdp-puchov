#ifndef ARDUINO_SIGNALREF_H
#define ARDUINO_SIGNALREF_H


class SignalRef {
public:
    static const int SIGNAL_STOJ = 0;
    static const int SIGNAL_VOLNO = 1;
    static const int SIGNAL_VYSTRAHA = 2;

public:
    int id;
    int state;

    SignalRef(int signalId) {
        this->id = signalId;
        this->state = 1;
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

class Signal {
public:
    int id;
    int scomPin;
    uint8_t mask;
    int state;
    int lockTime;
    uint8_t status;
public:
    Signal(int scomPin, int id) : id(id) {
        this->state = 2;
        this->status = 1;
        this->setPin(scomPin);
    };

public:

    void setState(int id) {
        this->state = id;
        this->mask = 0x00000001;
    }

public:
    void clock() {
        //    Serial.println(this->status);
        //Serial.println(this->data);
        if (this->lockTime < 300) {
            this->lockTime += 10;
            return;
        }
        switch (this->status) {
            case 1:
                digitalWrite(this->scomPin, LOW);
                this->status = 2;
                break;
            case 2:
                digitalWrite(this->scomPin, HIGH);
                this->status = 3;
                this->mask = 0x00000001;
                break;
            case 3:

                digitalWrite(this->scomPin, (this->state & this->mask) ? HIGH : LOW);
                this->mask <<= 1;
                if (!this->mask) {
                    this->status = 4;
                }
                break;
            case 4:
                digitalWrite(this->scomPin, HIGH);
                this->lockTime = 0;

                this->status = 1;
                break;
        }
    }

public:

    int getState() {
        return this->state;
    }

    void setPin(int pin) {
        this->scomPin = pin;
        pinMode(pin, OUTPUT);
        digitalWrite(this->scomPin, HIGH);
    }

    void sendState() {
        Serial.print("s:");
        Serial.print(this->id);
        Serial.print(":");
        Serial.println(this->state);
    }
};


#endif //ARDUINO_SIGNALREF_H
