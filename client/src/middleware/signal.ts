import { SignalLight } from '@definitions/signals/interfaces';

export class SignalLightDisplay {

    public static getColorById(type: SignalLight): string {
        switch (type) {
            case 'HZ':
            case 'DZ':
                return 'yellow';
            case 'Z':
                return 'green';
            case 'C':
                return 'red';
            case 'B':
                return 'white';
            case 'X':
                return 'black';
            case 'M':
                return 'blue';
        }
    }

    public static getColorCallBack(type: SignalLight, state: number): string {
        const className = 'signal-light ';
        if (state === undefined || state === -1) {
            return className + 'undefined';
        }
        switch (type) {
            case 'HZ':
                return className + this.getYellowTop(state);
            case 'Z':
                return className + this.getGreen(state);
            case 'C':
            case 'M':
                return className + this.getRed(state);
            case 'B':
                return className + this.getWhite(state);
            case 'DZ':
                return className + this.getYellowBottom(state);
            case 'X':
                return className + 'off';
        }
    }

    public static getYellowTop(state: number): string {
        switch (state) {
            case 2:
            case 5:
            case 6:
            case 12:
            case 15:
                return 'flash';
            case 3:
            case 7:
            case 14:
                return 'blink';
            default:
                return 'off';
        }
    }

    public static getGreen(state: number): string {
        switch (state) {
            case 1:
            case 4:
            case 5:
            case 11:
                return 'flash';
            default:
                return 'off';
        }
    }

    public static getRed(state: number): string {
        switch (state) {
            case 0:
            case 5:
            case 8:
            case 10:
                return 'flash';
            default:
                return 'off';
        }
    }

    public static getWhite(state: number): string {
        switch (state) {
            case 5:
            case 9:
            case 10:
            case 11:
            case 12:
            case 14:
            case 15:
                return 'flash';
            case 8:
                return 'blink';
            default:
                return 'off';
        }
    }

    public static getYellowBottom(state: number): string {
        switch (state) {
            case 4:
            case 6:
            case 5:
            case 7:
            case 15:
                return 'flash';
            default:
                return 'off';
        }
    }
}

export const signalStateMapping = (state: number): string => {
    switch (state) {
        case 0:
            return 'stoj';
        case 1:
            return 'volno';
        case 2:
            return 'výstraha';
        case 3:
            return 'očakávaj 40 km/h';
        case 4:
            return 'rýchlosť 40km/h a voľno';
        case 5:
            return 'test';
        case 6:
            return 'rýchlost 40 km/h a výstraha';
        case 7:
            return 'rýchlost 40 km/h a očakávaj 40 km/h';
        case 8:
            return 'privolávacia návest';
        case 9:
            return 'posun dovolený';
        case 10:
            return 'nezabepečený posun dovolený';
        case 11:
            return 'opakované voľno';
        case 12:
            return 'opakovaná výstraha';
        case 13:
            return 'vypnuté';
        case 14:
            return 'opakovanie očakavaj rýchlost 40 km/h';
        case 15:
            return 'rýchlost 40 km/h a opakovanie výstrahy';
        default:
            return 'undefined';
    }
};
