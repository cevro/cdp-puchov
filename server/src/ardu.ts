import * as SerialPort from 'serialport';

interface IWaitingObject {
    object?: number;
    signal?: number;
    callback?: Function;
    busy: boolean;
}

class Arduino {
    private waitingObject: IWaitingObject;
    private Buffer: Array<any>;
    public connector: any;

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
        this.Buffer = [];
        this.waitingObject = {busy: false};
        this.dateRetrive();
    };

    private getMsg(obj: number, signal: any) {
        console.log(arguments);
        return obj.toString() + '|' + signal.toString();
    }

    public write(object: number, signal: any, callback: Function, p: boolean = false) {
        let o = {object, signal, callback, busy: true};
        this.Buffer = this.Buffer.filter((d) => {
            return d.object != object;
        });
        if (p) {
            this.Buffer.unshift(o);

        } else {
            this.Buffer.push(o);
        }
        this.sendOnce();
    }

    private sendOnce() {
        if (this.waitingObject.busy) {
            return;
        }
        if (!this.Buffer.length) {
            return;
        }
        this.waitingObject = this.Buffer.shift();
        let {object, signal} =  this.waitingObject;
        let msg = this.getMsg(object, signal);

        this.connector.write(msg);
        // console.log('Sending ' + msg);
    }

    private dateRetrive() {
        this.connector.on('data', (data) => {
            let waitingObject = this.waitingObject;
            this.waitingObject = {busy: false};
            console.log(data);
            //  console.log(waitingObject);
            waitingObject.callback(data);
            this.sendOnce();
        })
    }
}

export default new Arduino('/dev/ttyACM0');

