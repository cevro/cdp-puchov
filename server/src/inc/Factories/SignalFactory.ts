import Signal from '../objects/Signal';
import { signals } from '../../definitions/Signals';
import { MESSAGE_ACTION_DUMP } from '../../../../definitions/interfaces';
import { connection } from 'websocket';

export const SignalFactory = new class {

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

    public dump(connection: connection) {
        const messages = this.signals.map((signal) => {
            return signal.dumpData();
        });
        connection.send(JSON.stringify({
            action: MESSAGE_ACTION_DUMP,
            entity: 'signal',
            id: 0,
            date: new Date(),
            data: messages,
        }));
    }
};
