import * as SerialPort from 'serialport';

class SerialConnector {

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
        console.log(msg);
    }

    private dateReceive(): void {
        this.connector.on('data', (data) => {

            // store.emit('DATA_RECEIVE', data.toString().split(':'));
            console.log(data);
            console.log(data.toString());
        });
    }
}

export default new SerialConnector('/dev/ttyUSB1');

