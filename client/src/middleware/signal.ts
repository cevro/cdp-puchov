import { signalLight } from '@definitions/Signals';

export class SignalLightDisplay {

    public static getColorById(type: signalLight): string {
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

    public static getColorCallBack(type: signalLight, state: number): string {
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
