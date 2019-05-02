import Signal from '../objects/Signal';

export default class SignalFactory {

    public readonly SIGNAL_ENTRY = 1;
    public readonly SIGNAL_EXIT = 2;
    public readonly SIGNAL_PATH = 3;

    private readonly signals: {
        [id: number]: Signal;
    };

    constructor() {
        for (let id = 0; id < 15; id++) {
            this.signals[id] = new Signal(id);
        }

    }

    public getSignals(): {
        [id: number]: Signal;
    } {
        return this.signals;
    }
}

