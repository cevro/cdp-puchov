import VlakovaCesta from "./VlakovaCesta";

import {AbstractObject} from "./AbstractObject";

export class Signal extends AbstractObject {
    public constructor({name, type, arduino, port}) {
        super({name});
        this.SignalType = type;
        this.arduino = arduino;
        this.port = port;
        this.type = 'signal';
        this.status = 8;
    }

    private VCTo: VlakovaCesta;
    private VCFrom: VlakovaCesta;
    protected SignalType: string;
    protected arduino: any;
    protected port: number;

    public setNavest(id: number) {

        if (this.status == id) {
            return;
        }

        let callback = (data: any) => {
            this.status = id;
            if (this.VCFrom) {
                this.VCFrom.change();
            }
            if (this.VCTo) {
                this.VCTo.change();
            }
            this.sendStatus();
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
