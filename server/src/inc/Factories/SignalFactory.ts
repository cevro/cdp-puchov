import Signal from '../objects/Signal';
import { signals } from '../../definitions/Signals';
import { SignalState } from '../../definitions/interfaces';

export const signalFactory = new class {

    private readonly signals: Signal[];

    constructor() {
        this.signals = signals.map((value => {
            return new Signal(value);
        }));
    }

    public findById(id: number): Signal {
        for (const index in this.signals) {
            if (this.signals.hasOwnProperty(index)) {
                if (this.signals[index].id === id) {
                    return this.signals[index];
                }
            }
        }
        throw new Error();
    }

    public dump(): SignalState[] {
        return this.signals.map((signal) => {
            return signal.dumpData();
        });
    }
};
