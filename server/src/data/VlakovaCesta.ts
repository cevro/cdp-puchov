import {Signal} from "./AbstractSignal";

export default class VlakovaCesta {
    private signalFrom: Signal;
    private signalTo: Signal;
    private active: boolean;
    private toSide: boolean;

    constructor({signalFrom, signalTo, toSide}) {
        this.signalFrom = signalFrom;
        this.signalTo = signalTo;
        this.signalTo.setVCTo(this);
        this.signalFrom.setVCFrom(this);

        this.toSide = toSide;
        this.active = true;
    }

    public change() {
        console.log('change');
        if (!this.active) {
            return;
        }
        this.refreshSignals();
    };

    private refreshSignals() {
        let toNavest = this.signalTo.getNavestID();
        let fromNavest = 0;
        if (this.toSide) {
            fromNavest = this.getNavestToSide(toNavest);
        } else {
            fromNavest = this.getNavestStraight(toNavest);
        }
        this.signalFrom.setNavest(fromNavest);
    };

    private getNavestToSide(fromNavest) {
        switch (fromNavest) {
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

    private getNavestStraight(fromNavest) {
        switch (fromNavest) {
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
