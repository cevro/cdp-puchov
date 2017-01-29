import VlakovaCesta from "./VlakovaCesta";
import wsServer from './../webSocetServer';
export class Signal {
    public constructor({name, type, arduino, port}) {
        this.name = name;
        this.arduino = arduino;
        this.port = port;
        this.type = type;
        this.navestID = 0;
    }

    private VCTo: VlakovaCesta;
    private VCFrom: VlakovaCesta;
    protected name: string;
    protected type: string;
    private navestID: number;
    private displayNavestID: number;
    protected arduino: any;
    protected port: number;

    public setNavest(id: number) {

        if (this.navestID == id) {
            return;
        }
        this.navestID = id;

        let callback = (data: any) => {
            this.displayNavestID = id;
            //console.log(this);
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

    public sendStatus(connection = null) {
        let {name, type, navestID, displayNavestID} = this;
        let msg = {name, type, navestID, displayNavestID};
        if(connection){
            connection.send(JSON.stringify(msg));
        }else{
            wsServer.broadcast(JSON.stringify(msg));
        }
    }

    setVCFrom(vlakovaCesta: VlakovaCesta) {
        console.log('addVCFrom');
        this.VCFrom = vlakovaCesta;
    }

    unsetVCFrom() {
        this.VCFrom = null;
    }

    setVCTo(vlakovaCesta: VlakovaCesta) {
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
