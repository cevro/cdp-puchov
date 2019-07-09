#ifndef ARDUINO_SIGNAL_H
#define ARDUINO_SIGNAL_H

namespace Signal {
    class Signal {
    public:
        int id;
        int scomPin;
        uint8_t mask;
        uint8_t state;
        int lockTime;
    private:
        uint8_t status;
    public:
        Signal(int scomPin, int id) : id(id) {
            this->state = 5;
            this->status = 1;
            this->setPin(scomPin);
        };

    public:

        void setState(uint8_t id) {

            this->state = id;
            this->mask = 0x00000001;
            this->dump();
        }

    public:
        void handleCmd(char cmd, int value) {
            switch (cmd) {
                case 's':
                    this->setState(value);
            }
            return;
        }

    public:
        int getId() {
            return this->id;
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

    public:
        void dump() {
            Serial.print(this->id);
            Serial.print(":s:");
            Serial.println(this->state);

        }

    private:
        void setPin(int pin) {
            this->scomPin = pin;
            pinMode(pin, OUTPUT);
            digitalWrite(this->scomPin, HIGH);
        }
    };
};

#endif //ARDUINO_SIGNAL_H
