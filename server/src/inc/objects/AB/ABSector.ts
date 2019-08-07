import {LocoNetMessage} from '../../Factories/DateReceiver';
import {locoNetConnector} from '../../SerialConnector/SerialConnector';
import {ENTITY_AB_SECTOR} from '@definitions/entity';
import LocoNetObject from '../LocoNetObject';
import {
    ClientToServerMessages,
    StateUpdateData,
} from '@definitions/messages/ABSector';

export default class ABSector extends LocoNetObject<ClientToServerMessages, StateUpdateData> {
    private _error: number;
    private _state: number;
    private active: number;
    private fullBlockConditionActive: number;

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
        if (value === this._error) {
            return;
        }
        this._error = value;
        this.sendState();
    }

    get errorCode(): number {
        return this._error;
    }

    get errorMessage(): string {
        switch (this._error) {
            case 0:
                return '';
            case 1:
                return 'Full block condition';
        }
        return 'undefined';
    }

    constructor(data: any) {
        super(data.locoNetId);
        this._state = -1;
        this._error = -1;
        this.active = -1;
        this.fullBlockConditionActive = -1;

    }

    public getEntityName() {
        return ENTITY_AB_SECTOR;
    }

    public dumpData(): StateUpdateData {
        return {
            state: this.state,
            locoNetId: this.locoNetId,
            errorCode: this.errorCode,
            errorMessage: this.errorMessage,
            fullBlockConditionActive: this.fullBlockConditionActive,
            active: this.active,
        };
    }

    public handleLocoNetReceive(data: LocoNetMessage): void {
        switch (data.type) {
            case 'e':
                this.errorCode = data.value;
                break;
            case 's':
                this.state = data.value;
                break;
            case 'a':
                this.active = data.value;
                this.sendState();
                break;
            case 'c':
                this.fullBlockConditionActive = data.value;
                this.sendState();
                break;
        }
        // console.log(this);
    }

    public handleMessageReceive(message: ClientToServerMessages): void {
        switch (message.action) {
            case 'remove-error':
                locoNetConnector.send({
                    locoNetId: this.locoNetId,
                    type: 'e',
                    value: 0,
                });
                return;
            case 'set-block-condition':
                locoNetConnector.send({
                    locoNetId: this.locoNetId,
                    type: 'c',
                    value: message.data.state,
                });
                return;
        }

    }
}
