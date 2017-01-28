export class Signal {
    public constructor({name, type, arduino, port}) {
        this.name = name;
        this.arduino = arduino;
        this.port = port;
        this.type = type;
    }

    private VCTo;
    private VCFrom;
    protected name: string;
    protected type: string;
    private navestID: number;
    private displayNavestID: number;
    protected arduino: any;
    protected port: number;

    public setNavest(id: number) {
        let callback = (data: any) => {
            this.displayNavestID = id;
            console.log(this);
            if (this.VCFrom) {
                this.VCFrom.change();
            }
            if (this.VCTo) {
                this.VCTo.change();
            }
        };
        this.arduino.write(this.port, id, callback);
        this.navestID = id;
    }

    setVCFrom(vlakovaCesta) {
        console.log('addVCFrom');
        this.VCFrom = vlakovaCesta;
    }

    unsetVCFrom() {
        this.VCFrom = null;
    }

    setVCTo(vlakovaCesta) {
        console.log('addVCTo');
        this.VCTo = vlakovaCesta;
    }

    unsetVCTo() {
        this.VCTo = null;
    }

    public getNavestID() {
        return this.displayNavestID;
    }
}

export const VCHODOVE = 'VCHODOVE';
export const ODCHODOVE = 'ODCHODOVE';
export const CESTOVE = 'CESTOVE';
export const ODDIELOVE = 'ODDIELOVE';
