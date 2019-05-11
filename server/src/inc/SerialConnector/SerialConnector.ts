import * as SerialPort from 'serialport';

export interface SerialMessage {
    entity: 'signal' | 'sector' | 'point';
    id: number;
    state: number;
}

export type Listener = (msg: SerialMessage) => void;

class SerialConnector {
    private listeners: Listener[] = [];

    private connector: SerialPort;

    constructor(PORT: string) {
        this.connector = new SerialPort(PORT, {
            baudRate: 115200,
            // defaults for Arduino serial communication
            dataBits: 8,
            parity: 'none',
            stopBits: 1,
        });
        this.dateReceive();
    };

    public write(msg): void {
        this.connector.write(msg);
    }

    private dateReceive(): void {
        this.connector.on('data', (data) => {
            this.listeners.forEach((listener) => listener(this.parseMessage(data.toString())));
            console.log(data.toString());
        });
    }

    public registerListener(listener: Listener) {
        this.listeners.push(listener);
    }

    private parseMessage(msg: string): SerialMessage {
        const parts = msg.split(':');
        let entity = null;
        switch (parts[0]) {
            case 's':
                entity = 'signal';
                break;
            case 'o':
                entity = 'sector';
                break;
        }
        return {
            entity,
            id: +parts[1],
            state: +parts[2],
        };
    }
}

export default new SerialConnector('/dev/ttyUSB1');

