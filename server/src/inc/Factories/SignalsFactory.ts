import Signal from '../objects/Signal';
import {
    SignalState,
} from '../../../../definitions/interfaces';
import {
    LocoNetMessage,
    LocoNetReceiver,
    MessageReciever,
} from './DateReceiver';
import {signals} from '../../data/signals';
import {ENTITY_SIGNAL} from "../../../../definitions/consts";
import {Message} from '../../../../definitions/messages';

class SignalsFactory implements LocoNetReceiver, MessageReciever {

    private readonly signals: Signal[];

    constructor() {
        this.signals = signals.map((value => {
            return new Signal(value);
        }));
        // console.log(this.signals);
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
        //console.log('msq');
        if (message.entity !== ENTITY_SIGNAL) {
            return;
        }
        this.signals.forEach((signals) => {
            if (signals.id == message.id) {
                signals.handleMessageReceive(message);
            }
        });
    }

    public handleLocoNetReceive(data: LocoNetMessage) {
        this.signals.forEach((signal) => {
            if (signal.locoNetId == data.locoNetId) {
                signal.handleLocoNetReceive(data);
            }
        });
    }
}

export const signalFactory = new SignalsFactory();
