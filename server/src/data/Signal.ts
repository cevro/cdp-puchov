import VlakovaCesta from "./VlakovaCesta";

import {AbstractObject} from "./AbstractObject";

import {
    MSG_ERROR,
    MSG_INFO,
    MSG_SUCCESS,
    MSG_WARNING
} from '../consts/messages/levels';
export const Signal_TYPE = 'signal';

export class Signal extends AbstractObject {
    private VCTo: VlakovaCesta;
    private VCFrom: VlakovaCesta;
    protected signalType: string;
    protected arduino: any;
    protected port: number;

    public constructor({name, type, arduino, port}) {
        super({name});
        this.signalType = type;
        this.arduino = arduino;
        this.port = port;
        this.type = Signal_TYPE;
        this.status = 0;
    }

    public setNavest(id: number) {

        if (this.status == id) {
            return;
        }
        this.sendMessage('návestidlo:' + this.name + ' sa prestavuje do polohy' + id, MSG_INFO);

        let callback = (data: any) => {
            this.status = id;
            if (this.VCFrom) {
                this.VCFrom.change();
            }
            if (this.VCTo) {
                this.VCTo.change();
            }
            this.sendStatus();
            this.sendMessage('návestidlo:' + this.name + ' bolo prestavené do polohy' + id, MSG_SUCCESS);
        };
        this.arduino.write(this.port, id, callback);

    }


    setVCFrom(vlakovaCesta: VlakovaCesta) {
        this.VCFrom = vlakovaCesta;
    }

    unsetVCFrom() {
        this.VCFrom = null;
    }

    setVCTo(vlakovaCesta: VlakovaCesta) {
        this.VCTo = vlakovaCesta;
    }

    unsetVCTo() {
        this.VCTo = null;
    }

    /**
     * @deprecated
     * @returns {number}
     */
    public getNavestID() {
        return this.status;
    }
}

export const VCHODOVE = 'VCHODOVE';
export const ODCHODOVE = 'ODCHODOVE';
export const CESTOVE = 'CESTOVE';
export const ODDIELOVE = 'ODDIELOVE';
