import { SignalDefinition } from '../../definitions/Signals';
import { logger } from '../../webSocetServer';
import { MESSAGE_ACTION_STATE_UPDATE } from '../../definitions/interfaces';

export default class Signal {
    public id;

    private _state: number;

    set state(value: number) {
        this._state = value;
        this.sendState();
    }

    get state() {
        return this._state;
    }

    constructor(definition: SignalDefinition) {
        this.id = definition.id;
        this._state = 0;
    }

    public getState(): number {
        return 0;
    }

    public sendState() {
        logger.log({
            action: MESSAGE_ACTION_STATE_UPDATE,
            entity: 'signal',
            data: this.dumpData(),
            id: this.id,
            date: new Date(),
        });
    }

    public dumpData() {
        return {
            state: this.state,
            id: this.id,
        };
    }

    /*
        public lock(trainRoute: TrainRoute) {
            if (this.lockedBy) {
                throw new Error();
            }
            this.lockedBy = trainRoute.id;
        }*/

}
