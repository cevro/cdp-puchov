import * as SerialPort from 'serialport';

interface ISendingObject {
    object: number;
    signal: number;
}
interface IWaitingObject extends ISendingObject {
    callback: Function;
}

export const getSerialMessage = (obj: ISendingObject): string => {
    return obj.object.toString() + '|' + obj.signal.toString();
};

export class Arduino {
    private waitingObject: IWaitingObject;
    private Buffer: Array<IWaitingObject>;
    public connector: any;
    private busy: boolean;

    constructor(PORT: string) {
        this.connector = new SerialPort(PORT, {
            baudrate: 9600,
            // defaults for Arduino serial communication
            dataBits: 8,
            parity: 'none',
            stopBits: 1,
            flowControl: false,
            parser: SerialPort.parsers.readline('\n')
        });
        this.busy = false;
        this.Buffer = [];
        this.dateRetrive();
    };

    public write(object: ISendingObject, callback: Function) {
        this.Buffer.push(Object.assign({}, object, {callback}));
        this.sendOnce();
    }

    private sendOnce() {
        if (this.busy) {
            return;
        }
        if (!this.Buffer.length) {
            return;
        }
        this.busy = true;
        this.waitingObject = this.Buffer.shift();
        let msg = getSerialMessage(this.waitingObject);

        this.connector.write(msg);
        // console.log('Sending ' + msg);
    }

    private dateRetrive() {
        this.connector.on('data', (data) => {
            let waitingObject = this.waitingObject;
            this.busy = false;
            waitingObject.callback(data);
            this.sendOnce();
        });
    }
}

export default new Arduino('/dev/ttyUSB0');

