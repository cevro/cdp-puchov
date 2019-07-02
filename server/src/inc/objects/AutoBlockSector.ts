import { logger } from '../../webSocetServer';
import { MESSAGE_ACTION_STATE_UPDATE } from '../../../../definitions/interfaces';
import { Message } from '../../definitions/interfaces';
import {
    LocoNetMessage,
    LocoNetReciever,
    MessageReciever,
} from '../Factories/DateReceiver';
import { locoNetConnector } from '../SerialConnector/SerialConnector';

export default class AutoBlockSector implements MessageReciever, LocoNetReciever {
    public readonly locoNetId: number;
    private _error: number;
    private _state: number;


    set state(value: number) {
        if (value === this._state) {
            return;
        }
        this._state = value;
        this.sendState();
    }

    get state() {
        return this._state;
    }

    set errorCode(value: number) {
        if (value === this._state) {
            return;
        }
        this._state = value;
        this.sendState();
    }

    get errorCode() {
        return this._state;
    }

    get errorMessage() {
        switch (this._error) {
            case 0:
                return '';
            case 1:
                return 'Full block condition';
        }
        return 'undefined';
    }

    constructor(data: any) {
        this.locoNetId = data.locoNetId;
    }

    public sendState() {
        logger.log({
            action: MESSAGE_ACTION_STATE_UPDATE,
            entity: 'auto-block-sector',
            data: this.dumpData(),
            id: this.locoNetId,
            date: new Date(),
        });
    }

    public dumpData() {
        return {
            state: this.state,
            id: this.locoNetId,
            errorCode: this.errorCode,
            errorMessage: this.errorMessage,
        };
    }

    public handleLocoNetReceive(data: LocoNetMessage) {
        if (data.locoNetId == this.locoNetId) {
            switch (data.type) {
                case 'e':
                    return this.errorCode = data.value;
                case 's':
                    return this.state = data.value;
            }

        }
    }

    public handleMessageReceive(message: Message) {
        if (message.id != this.locoNetId) {
            return;
        }
        switch (message.action) {
            case 'remove-error':
                locoNetConnector.send({
                    locoNetId: this.locoNetId,
                    type: 'e',
                    value: 0,
                })
        }

    }
}
