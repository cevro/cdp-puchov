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
        }
        this.signalFrom.setNavest(fromNavest);
        /* if (this->dzv) {
         switch (this->navestidloTo->GetNavest()) {
         case 0:
         case 8:
         case 9:
         case 10:
         case 12:
         case 15:
         this->navestidloFrom->SetNavest(2);
         break;
         case 1:
         case 2:
         case 3:
         case 11:
         this->navestidloFrom->SetNavest(1);

         break;
         case 4:
         case 6:
         case 7:
         case 14:
         case 16:
         this->navestidloFrom->SetNavest(3);
         break;

         default:
         this->navestidloFrom->SetNavest(0);
         break;

         }
         }
         else {
         switch (this->navestidloTo->GetNavest()) {
         case 0:
         case 8:
         case 9:
         case 10:
         case 12:
         case 15:
         this->navestidloFrom->SetNavest(2);
         break;
         case 1:
         case 2:
         case 3:
         case 11:
         this->navestidloFrom->SetNavest(1);

         break;
         case 4:
         case 6:
         case 7:
         case 14:
         case 16:
         this->navestidloFrom->SetNavest(3);
         break;

         default:
         this->navestidloFrom->SetNavest(0);
         break;

         }*/
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
}
