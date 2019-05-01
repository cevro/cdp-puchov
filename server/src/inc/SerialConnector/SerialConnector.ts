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
        console.log(msg);
        this.connector.write(msg);

    }

    private dateReceive(): void {
        this.connector.on('data', (data) => {

            // store.emit('DATA_RECEIVE', data.toString().split(':'));
            console.log(data);
            console.log(data.toString());
        });
    }
}

export default new SerialConnector('/dev/ttyUSB0');

