import { SectorDefinition } from '../../definitions/Sectors';
import { logger } from '../../webSocetServer';
import { STATUS_FREE } from '../../consts/obvod/status';
import {
    MESSAGE_ACTION_STATE_UPDATE,
    SectorState,
} from '../../definitions/interfaces';

export default class Sector {
    public readonly id;
    private _locked: number;
    private _state: number;

    constructor(definition: SectorDefinition) {
        this.id = definition.id;
        this._locked = null;
        this._state = STATUS_FREE;

    }

    set state(value: number) {
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
     */
    public isFree(): boolean {
        return this.state === STATUS_FREE;
    }

    public dumpData(): SectorState {
        return {
            state: this.state,
            id: this.id,
            locked: this.locked,
        };
    }
}




