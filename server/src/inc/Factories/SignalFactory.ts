import Signal from '../objects/Signal';

export default class SignalFactory {

    public readonly SIGNAL_ENTRY = 1;
    public readonly SIGNAL_EXIT = 2;
    public readonly SIGNAL_PATH = 3;

    private readonly signals;

    constructor() {
        this.signals = [
            new Signal(1, '1L', this.SIGNAL_ENTRY),
            new Signal(2, '2L', this.SIGNAL_ENTRY),
            new Signal(3, 'L1', this.SIGNAL_EXIT),
            new Signal(4, 'L2', this.SIGNAL_EXIT),
            new Signal(5, 'L3a', this.SIGNAL_EXIT),
            new Signal(6, 'Lc3', this.SIGNAL_EXIT),
            new Signal(7, 'L4', this.SIGNAL_EXIT),
            new Signal(8, 'L6', this.SIGNAL_EXIT),
            new Signal(9, 'L8', this.SIGNAL_EXIT),
            new Signal(10, 'L10', this.SIGNAL_EXIT),
            new Signal(11, 'L12', this.SIGNAL_EXIT),
            new Signal(12, 'L14a', this.SIGNAL_EXIT),
            new Signal(13, 'Lc14', this.SIGNAL_EXIT),
            new Signal(14, 'Lc16', this.SIGNAL_EXIT),
        ];
    }

    public getSignals(): Signal[] {
        return this.signals;
    }
}

