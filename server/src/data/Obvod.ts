import VlakovaCesta from "./VlakovaCesta";
import {AbstractObject} from './AbstractObject';
const STATUS_FREE = 1;
const STATUS_BUSY = 0;
const STATUS_IN_VC = 2;
const STATUS_IN_PC = 3;
const STATUS_VYLUKA = 4;

export default class Obvod extends AbstractObject {
    private inVC: Array<VlakovaCesta>;

    constructor({name}) {
        super({name});

        this.inVC = [];
        this.type = 'obvod';
        this.status = STATUS_BUSY;
    }

    public addVC(VlakovaCesta: VlakovaCesta) {
        if (this.inVC.indexOf(VlakovaCesta) == -1) {
            this.inVC.push(VlakovaCesta);
        }
    }

    public changeStatus(nextStatus) {
        this.status = +nextStatus;
        this.inVC.forEach((VC) => {
            VC.change();
        });
        this.sendStatus();
    }
}
