import {SignalBackEndDefinition} from '../../definitions/Signals';
import {logger} from '../../webSocetServer';
import {
    Message,
    MESSAGE_ACTION_STATE_UPDATE,
    SignalState,
} from '../../definitions/interfaces';
import {
    DataDumper,
    LocoNetMessage,
    LocoNetReceiver,
    MessageReciever,
} from '../Factories/DateReceiver';
import {locoNetConnector} from '../SerialConnector/SerialConnector';
import {ENTITY_SIGNAL} from "../../definitions/consts";

export default class Signal implements LocoNetReceiver, DataDumper<SignalState>, MessageReciever {
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

    constructor(definition: SignalBackEndDefinition) {
        this.locoNetId = definition.locoNetId;
        this._displayState = -1;
        this._requestedState = -1;
    }

    get id(): number {
        return this.locoNetId;
    }

    public sendState() {
        logger.log({
            action: MESSAGE_ACTION_STATE_UPDATE,
            entity: ENTITY_SIGNAL,
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
}
