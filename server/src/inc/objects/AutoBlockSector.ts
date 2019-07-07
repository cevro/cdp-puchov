import { AutoBlockSectorState } from '../../../../definitions/interfaces';
import { Message } from '../../definitions/interfaces';
import {
    LocoNetMessage,
    LocoNetReciever,
    MessageReciever,
} from '../Factories/DateReceiver';
import { locoNetConnector } from '../SerialConnector/SerialConnector';
import AbstractDumper from './AbstractDumper';

export default class AutoBlockSector extends AbstractDumper<AutoBlockSectorState> implements MessageReciever, LocoNetReciever {
    public readonly locoNetId: number;
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
        super();
        this.locoNetId = data.locoNetId;
        this._state = -1;
        this._error = -1;
        this.active = -1;
        this.fullBlockConditionActive = -1;

    }

    public getLocoNetId() {
        return this.locoNetId;
    }

    public getEntityName() {
        return 'auto-block-sector';
    }

    public dumpData(): AutoBlockSectorState {
        return {
            state: this.state,
            locoNetId: this.getLocoNetId(),
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

    public handleMessageReceive(message: Message): void {
        switch (message.action) {
            case 'remove-error':
                locoNetConnector.send({
                    locoNetId: this.locoNetId,
                    type: 'e',
                    value: 0,
                });
                return;
            case 'switch-block-condition':
                locoNetConnector.send({
                    locoNetId: this.locoNetId,
                    type: 'c',
                    value: message.data.state,
                });
                return;
        }

    }
}
