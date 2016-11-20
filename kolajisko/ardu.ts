/**
 * Created by miso on 20.11.2016.
 */
import {SerialPort} from  'serialport';

export default class Ardu {
    private _busy: boolean;
    private Buffer: Array<any>;
    public connector;

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
        this._busy = false;
        this.dateRetrive();


    };

    private getMsg(obj: number, signal: any) {
        return obj.toString() + '|' + signal.toString();
    }

    public write(object: number, signal: any, p: boolean = false) {
        let o = {object,signal};
        this.Buffer= this.Buffer.filter((d)=>{
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
        if (this._busy) {
            return;
        }
        if (!this.Buffer.length) {
            return;
        }
        this._busy=true;
      let {object,signal} =   this.Buffer.shift();
        let msg = this.getMsg(object, signal);

        this.connector.write(msg);
console.debug('Sending '+msg);
        this.sendOnce();


    }
    private dateRetrive(){
      this.connector.on('data',(data)=>{

          this._busy=false;
          this.sendOnce();
      })
    }


}


