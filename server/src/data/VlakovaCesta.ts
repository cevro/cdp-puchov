import {Signal} from "./Signal";
import Obvod from './Obvod';

const STATUS_FREE = 1;
const STATUS_BUSY = 0;
const STATUS_IN_VC = 2;
const STATUS_IN_PC = 3;
const STATUS_VYLUKA = 4;


export default class VlakovaCesta {
    private signalFrom: Signal;
    private signalTo: Signal;
    private active: boolean;
    private toSide: boolean;
    private status: number;
    private obvody: Array<Obvod>;

    constructor({signalFrom, signalTo, toSide, obvody}) {
        this.signalFrom = signalFrom;
        this.signalTo = signalTo;
        this.signalTo.setVCTo(this);
        this.signalFrom.setVCFrom(this);
        this.toSide = toSide;
        this.obvody = obvody;
        this.obvody.forEach((obvod) => {
            obvod.addVC(this);
        });
        this.active = true;
        this.status = STATUS_BUSY;
    }

    public change() {
        if (!this.active) {
            return;
        }
        this.refreshSignals();
    };

    private getStatus() {
        this.status = this.obvody.reduce((status, obvod) => {
            return status && obvod.getStatus();
        }, 1);
        return this.status;

    }

    private refreshSignals() {
        let toNavest = this.signalTo.getNavestID();
        let fromNavest = 0;
        console.log('status' + this.status);
        if (this.getStatus() == STATUS_BUSY) {
            fromNavest = 0;
        } else {
            if (this.toSide) {
                fromNavest = this.getNavestToSide(toNavest);
            } else {
                fromNavest = this.getNavestStraight(toNavest);
            }
        }
        console.log(fromNavest);
        this.signalFrom.setNavest(fromNavest);
    };

    private getNavestToSide(toNavest) {
        switch (toNavest) {
            case 0:
            case 8:
            case 9:
            case 10:
            case 12:
            case 15:
                return 6;
            case 1:
            case 2:
            case 3:
            case 11:
                return 4;
            case 4:
            case 6:
            case 7:
            case 14:
            case 16:
                return 7;
            default:
                return 0;

        }
    }

    private getNavestStraight(toNavest) {
        switch (toNavest) {
            case 0:
            case 8:
            case 9:
            case 10:
            case 12:
            case 15:
                return 2;
            case 1:
            case 2:
            case 3:
            case 11:
                return 1;
            case 4:
            case 6:
            case 7:
            case 14:
            case 16:
                return 3;
            default:
                return 0;
        }
    }
}

