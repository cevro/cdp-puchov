import { logger } from '../../../webSocetServer';
import { STATUS_FREE } from '../../../consts/obvod/status';
import {
    Message,
    MESSAGE_ACTION_STATE_UPDATE,
    SectorState,
} from '../../../definitions/interfaces';
import {
    DataDumper,
    LocoNetMessage,
    LocoNetReciever,
    MessageReciever,
} from '../../Factories/DateReceiver';
import { locoNetConnector } from '../../SerialConnector/SerialConnector';
import { SectorBackEndDefinition } from '../../../data/sectors';

export default class Sector implements DataDumper<SectorState>, LocoNetReciever, MessageReciever {
    public readonly locoNetId;
    private _locked: number;
    private _state: number;

    constructor(definition: SectorBackEndDefinition) {
        this.locoNetId = definition.locoNetId;
        this._locked = null;
        this._state = STATUS_FREE;

    }

    get id(): number {
        return this.locoNetId;
    }

    set state(value: number) {
        if (this._state === value) {
            return;
        }
        this._state = value;
        this.sendState();
    }

    get state(): number {
        return this._state;
    }

    set locked(value: number) {
        this._locked = value;
        this.sendState();
    }

    get locked(): number {
        return this._locked;
    }

    public sendState() {
        logger.log({
            action: MESSAGE_ACTION_STATE_UPDATE,
            entity: 'sector',
            data: this.dumpData(),
            id: this.id,
            date: new Date(),
        });
    }

    public lock(id: number) {
        this.locked = id;
        this.sendState();
    }

    public unlock(id: number) {
        if (this.locked == id) {
            this.locked = null;
        }
    }


    public check() {
        if (this.locked) {
            throw Error('Locked by ' + this.locked);
        }
        if (this.state !== STATUS_FREE) {
            throw Error('Not free');
        }
    }

    /**
     * return true if sector is in VC
     * @deprecated
     */
    public isFree(id: number): boolean {
        return this.isFreeAndAllocated(id);
    }

    /**
     * return true if sector is in VC
     */
    public isFreeAndAllocated(id: number): boolean {
        return (this.state === STATUS_FREE) && (this.locked === id);
    }

    public dumpData(): SectorState {
        return {
            state: this.state,
            id: this.locoNetId,
            locked: this.locked,
        };
    }

    public handleLocoNetReceive(data: LocoNetMessage) {
        switch (data.type) {
            case 's':
                this.state = data.value;
        }
    }

    public handleMessageReceive(message: Message) {
        switch (message.action) {
            case 'set-state':
                locoNetConnector.send({
                    locoNetId: this.locoNetId,
                    type: 's',
                    value: message.data.state,
                });
            // this.state = message.data.state;

        }
    }
}




