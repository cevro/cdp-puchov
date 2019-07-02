import * as SerialPort from 'serialport';
import {
    LocoNetMessage,
    LocoNetReciever,
    MessageReciever,
} from '../Factories/DateReceiver';
import { Message } from '../../definitions/interfaces';


class SerialConnector implements MessageReciever {
    private listeners: LocoNetReciever[] = [];

    private connector: SerialPort;
    private params: SerialPort.OpenOptions;
    private port: string = '/dev/ttyUSB1';

    private tryConnect() {
        try {
            this.connector = new SerialPort(this.port, {
                baudRate: 115200,
                // defaults for Arduino serial communication
                dataBits: 8,
                parity: 'none',
                stopBits: 1,
            }, (err) => {
            });
            this.dateReceive();
        }
    }

    handleMessageReceive(message: Message<{ port: string, params: SerialPort.OpenOptions }>) {
        if (message.entity == 'loconet-connector') {
            switch (message.action) {
                case 'connect':
                    this.params = message.data.params;
                    this.port = message.data.port;
                    this.tryConnect();
                    break;
                case 'reconnect':
                    this.tryConnect();
            }

        }
    }

    public send(data: LocoNetMessage): void {
        const msg = data.locoNetId + ':' + data.type + ':' + data.value;
        this.connector.write(msg);
    }

    private dateReceive(): void {
        this.connector.on('data', (data) => {
            this.listeners.forEach((listener) => {
                listener.handleLocoNetReceive(this.parseMessage(data.toString()))
            });
            console.log(data.toString());
        });
    }

    public registerListener(listener: LocoNetReciever) {
        this.listeners.push(listener);
    }

    private parseMessage(msg: string): LocoNetMessage {
        const parts = msg.split(':');
        return {
            locoNetId: +parts[0],
            type: parts[1],
            value: +parts[2],
        };
    }
}

export const locoNetConnector = new SerialConnector();

