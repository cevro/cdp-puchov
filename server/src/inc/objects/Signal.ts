import { SignalDefinition } from '../../definitions/Signals';
import { logger } from '../../webSocetServer';
import {
    MESSAGE_ACTION_STATE_UPDATE,
    SignalState,
} from '../../definitions/interfaces';
import {
    DataDumper,
    LocoNetMessage,
    LocoNetReciever,
} from '../Factories/DateReceiver';
import { locoNetConnector } from '../SerialConnector/SerialConnector';

export default class Signal implements LocoNetReciever, DataDumper<SignalState> {
    public locoNetId;

    private _displayState: number;
    private _requestedState: number;

    public changeState(value: number) {
        if (value === this.requestedState) {
            return;
        }
        this._requestedState = value;
        locoNetConnector.send({
            locoNetId: this.locoNetId,
            type: 's',
            value: value,
        });
    }

    get displayState(): number {
        return this._displayState;
    }

    get requestedState(): number {
        return this._requestedState;
    }

    private setState(value: number) {
        if (value === this._displayState) {
            return;
        }
        this._displayState = value;
        this.sendState();
    }

    get state() {
        return this._displayState;
    }

    constructor(definition: SignalDefinition) {
        this.locoNetId = definition.id;
    }

    get id(): number {
        return this.locoNetId;
    }

    public sendState() {
        logger.log({
            action: MESSAGE_ACTION_STATE_UPDATE,
            entity: 'signal',
            data: this.dumpData(),
            id: this.locoNetId,
            date: new Date(),
        });
    }

    public dumpData(): SignalState {
        return {
            displayState: this.displayState,
            locoNetId: this.locoNetId,
            requestedState: this.requestedState,
        };
    }

    public handleLocoNetReceive(data: LocoNetMessage) {
        if (data.locoNetId != this.locoNetId) {
            return;
        }
        switch (data.type) {
            case 's':
                return this.setState(data.value);
        }
        return
    }

    public handleMessageReceive() {
    }
}
