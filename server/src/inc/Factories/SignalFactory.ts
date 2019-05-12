import Signal from '../objects/Signal';
import { signals } from '../../definitions/Signals';

export default class SignalFactory {

    public readonly SIGNAL_ENTRY = 1;
    public readonly SIGNAL_EXIT = 2;
    public readonly SIGNAL_PATH = 3;

    private readonly signals: Signal[];

    constructor() {
        this.signals = signals.map((value => {
            return new Signal(value.id);
        }));
    }
}
