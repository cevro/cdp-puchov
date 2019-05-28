import { logger } from '../../webSocetServer';
import {
    PointDefinition,
    pointPosition,
} from '../../definitions/Points';
import { PointLockedError } from '../Exceptions/Errors';
import {
    MESSAGE_ACTION_STATE_UPDATE,
    PointState,
} from '../../definitions/interfaces';

export default class Point {
    public TYPE_NAME = 'point';

    private _position: 1 | 0 | -1 = 0;

    public readonly id;
    private lockedBy: number[] = [];

    constructor(definition: PointDefinition) {
        this.id = definition.id;
        this._position = 0;
    }

    set position(value: 1 | 0 | -1) {
        this._position = value;
        this.sendState();
    }

    get position() {
        return this._position;
    }

    public check(position: pointPosition): void {
        if (this.position == position) {
            return;
        }
        if (this.lockedBy.length) {
            throw new PointLockedError(this, position);
        }
    }

    public async lock(id: number, position: 1 | -1) {
        if (this.position !== position) {
            await this.changePosition(position);
        }
        this.addLocker(id);
    }

    private addLocker(id: number) {
        this.lockedBy.push(id);
        this.sendState();
    }

    private removeLocker(id: number) {
        this.lockedBy = this.lockedBy.filter((lockerId) => {
            return lockerId !== id;
        });
        this.sendState();
    }

    public async changePosition(position: 1 | -1) {

        if (this.lockedBy.length > 0) {
            throw new Error();
        }
        await new Promise((resolve) => {
            setTimeout(() => resolve(), 500);
        });
        this.position = position;
    }

    public dumpData(): PointState {
        return {
            id: this.id,
            state: this.position,
            locked: !!this.lockedBy.length,
        };
    }

    public sendState() {
        logger.log({
            action: MESSAGE_ACTION_STATE_UPDATE,
            entity: this.TYPE_NAME,
            id: this.id,
            date: new Date(),
            data: this.dumpData(),
        });
    }
}
