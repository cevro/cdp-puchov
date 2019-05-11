import Signal from '../objects/Signal';

export default class SignalStrategy {
    readonly NAVEST_40_A_OCAKAVAJ_40 = 7;
    readonly NAVEST_40_A_VOLNO = 4;
    readonly NAVEST_40_A_VYSTRAHA = 6;
    readonly NAVEST_OCAKAVAJ_40 = 3;
    readonly NAVEST_STOJ = 0;
    readonly NAVEST_VOLNO = 1;
    readonly NAVEST_VYSTRAHA = 2;

    public calculate(endSignal: Signal, speed: number | null, sufficientDistance: boolean = true): number {
        if (speed !== null) {
            return this.getSignalToSide(endSignal, sufficientDistance);
        } else {
            return this.getSignalStraight(endSignal, sufficientDistance);
        }
    };

    private getSignalToSide(endSignal: Signal, sufficientDistance: boolean) {
        const toSignalId = endSignal.getState();
        switch (toSignalId) {
            case this.NAVEST_STOJ:
            case 8:
            case 9:
            case 10:
            case 12:
            case 15:
                return 6;
            case this.NAVEST_VOLNO:
            case this.NAVEST_VYSTRAHA:
            case this.NAVEST_OCAKAVAJ_40:
            case 11:
                return this.NAVEST_40_A_VOLNO;
            case this.NAVEST_40_A_VOLNO:
            case 6:
            case 7:
            case 14:
            case 16:
                return 7;
            default:
                return this.NAVEST_STOJ;
        }
    };

    private getSignalStraight(endSignal: Signal, sufficientDistance: boolean): number {
        const toSignalId = endSignal.getState();
        switch (toSignalId) {
            case this.NAVEST_STOJ:
            case 8:
            case 9:
            case 10:
            case 12:
            case 15:
                return this.NAVEST_VYSTRAHA;
            case this.NAVEST_VOLNO:
            case this.NAVEST_VYSTRAHA:
            case this.NAVEST_OCAKAVAJ_40:
            case 11:
                return this.NAVEST_VOLNO;
            case this.NAVEST_40_A_VOLNO:
            case this.NAVEST_40_A_VYSTRAHA:
            case this.NAVEST_40_A_OCAKAVAJ_40:
            case 14:
            case 16:
                return this.NAVEST_OCAKAVAJ_40;
            default:
                return this.NAVEST_STOJ;
        }
    };

}



