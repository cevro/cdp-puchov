import {
    STATUS_FREE,
    STATUS_UNDEFINED,
} from '@app/consts/obvod/status';
import {SectorState} from '@definitions/interfaces';
import {LocoNetMessage} from '../../Factories/DateReceiver';
import {locoNetConnector} from '../../SerialConnector/SerialConnector';
import {SectorBackEndDefinition} from '@app/data/sectors';
import {Message} from '@definitions/messages';
import LocoNetObject from '../LocoNetObject';
import {ENTITY_SECTOR} from '@definitions/consts';

export default class Sector extends LocoNetObject<Message<any>, SectorState> {
    private _locked: number;
    private _state: number;

    constructor(definition: SectorBackEndDefinition) {
        super(definition.locoNetId);
        this._locked = null;
        this._state = STATUS_UNDEFINED;

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

    public lock(id: number) {
        this.locked = id;
        this.sendState();
    }

    public unlock(id: number) {
        if (this.locked == id) {
            this.locked = null;
        }
    }

    public check(): void {
        if (this.locked) {
            throw Error('Locked by ' + this.locked);
        }
        if (this.state !== STATUS_FREE) {
            throw Error('Not free');
        }
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
            locoNetId: this.locoNetId,
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

    public getEntityName(): string {
        return ENTITY_SECTOR;
    }
}




