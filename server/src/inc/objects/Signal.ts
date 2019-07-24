import {SignalBackEndDefinition} from '@definitions/signals';
import {SignalState} from '@definitions/interfaces';
import {LocoNetMessage} from '../Factories/DateReceiver';
import {locoNetConnector} from '../SerialConnector/SerialConnector';
import {ENTITY_SIGNAL} from '@definitions/consts';
import {Message} from '@definitions/messages';
import LocoNetObject from './LocoNetObject';

export default class Signal extends LocoNetObject<Message<any>, SignalState> {

    private _displayState: number;
    private _requestedState: number;

    public changeState(value: number) {
        if (value === this.requestedState) {
            return;
        }
        this._requestedState = value;
        locoNetConnector.send({
            locoNetId: this.getLocoNetId(),
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

    constructor(definition: SignalBackEndDefinition) {
        super(definition.locoNetId);
        this._displayState = -1;
        this._requestedState = -1;
    }

    public dumpData(): SignalState {
        return {
            displayState: this.displayState,
            locoNetId: this.locoNetId,
            requestedState: this.requestedState,
        };
    }

    public handleLocoNetReceive(data: LocoNetMessage) {
        switch (data.type) {
            case 's':
                return this.setState(data.value);
        }
        return
    }

    public handleMessageReceive(message: Message) {
        switch (message.action) {
            case 'set-state':
                locoNetConnector.send({
                    locoNetId: this.locoNetId,
                    type: 's',
                    value: message.data.state,
                });

        }
    }

    public getEntityName(): string {
        return ENTITY_SIGNAL;
    }
}
