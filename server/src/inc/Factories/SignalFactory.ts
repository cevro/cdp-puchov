import Signal from '../objects/Signal';
import { signals } from '../../definitions/Signals';
import {
    Message,
    SignalState,
} from '../../definitions/interfaces';
import {
    LocoNetMessage,
    LocoNetReciever,
    MessageReciever,
} from './DateReceiver';

class SignalFactory implements LocoNetReciever, MessageReciever {

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

    public handleMessageReceive(message: Message) {

    }

    public handleLocoNetReceive(data: LocoNetMessage) {
        this.signals.forEach((signal) => {
            signal.handleLocoNetReceive(data);
        });
    }
}

export const signalFactory = new SignalFactory();
