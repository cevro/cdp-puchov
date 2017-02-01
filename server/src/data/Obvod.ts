import VlakovaCesta from "./VlakovaCesta";
import {AbstractObject} from './AbstractObject';

import {STATUS_FREE} from '../consts/obvod/status';

export default class Obvod extends AbstractObject {
    private inVC: Array<VlakovaCesta>;

    constructor({name}) {
        super({name});

        this.inVC = [];
        this.type = 'obvod';
        this.status = STATUS_FREE;
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
