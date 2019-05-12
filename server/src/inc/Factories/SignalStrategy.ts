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
    };

    private getSignalStraight(endSignal: Signal, sufficientDistance: boolean): number {
        const toSignalId = endSignal.getState();
        switch (toSignalId) {
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
    };

}



