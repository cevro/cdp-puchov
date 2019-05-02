import Signal from '../objects/Signal';

export default class SignalFactory {

    public readonly SIGNAL_ENTRY = 1;
    public readonly SIGNAL_EXIT = 2;
    public readonly SIGNAL_PATH = 3;

    private readonly signals;

    constructor() {
        this.signals = [
            new Signal(1),
            new Signal(2),
            new Signal(3),
            new Signal(4),
            new Signal(5),
            new Signal(6),
            new Signal(7),
            new Signal(8),
            new Signal(9),
            new Signal(10),
            new Signal(11),
            new Signal(12),
            new Signal(13),
            new Signal(14),
        ];
    }

    public getSignals(): Signal[] {
        return this.signals;
    }
}

