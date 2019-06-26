import { logger } from '../../webSocetServer';
import {
    PointDefinition,
    pointPosition,
    requestedPointPosition,
} from '../../definitions/Points';
import { PointLockedError } from '../Exceptions/Errors';
import {
    MESSAGE_ACTION_STATE_UPDATE,
    PointState,
} from '../../definitions/interfaces';

export default class Point {
    public TYPE_NAME = 'point';

    private _position: pointPosition;
    private _requestedPosition: requestedPointPosition;

    public readonly id;
    private lockedBy: number[] = [];
    public readonly sector;

    constructor(definition: PointDefinition) {
        this.id = definition.id;
        this._position = 0;
        this.sector = definition.sector;
        this._requestedPosition = null;
    }

    set position(value: pointPosition) {
        this._position = value;
        this.sendState();
    }

    get position() {
        return this._position;
    }

    set requestedPosition(value: requestedPointPosition) {
        this._requestedPosition = value;
        this.sendState();
    }

    get requestedPosition(): requestedPointPosition {
        return this._requestedPosition;
    }

    get changing(): boolean {
        return this._requestedPosition !== this._position;
    }

    public check(position: requestedPointPosition): void {
        if (this.position == position) {
            return;
        }
        if (this.lockedBy.length) {
            throw new PointLockedError(this, position);
        }
    }

    public async lock(id: number, position: requestedPointPosition) {
        if (this.position !== position) {
            await this.changePosition(position);
        }
        this.addLocker(id);
    }

    public unlock(id: number) {
        this.removeLocker(id);
    }

    public unlockBySector(id: number, sectorId: number) {
        if (this.sector === sectorId) {
            this.removeLocker(id);
        }
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

    public async changePosition(position: requestedPointPosition) {

        if (this.lockedBy.length > 0) {
            throw new Error();
        }
        this.requestedPosition = position;
        await new Promise((resolve) => {
            setTimeout(() => resolve(), 5000);
        });
        this.position = position;
    }

    public dumpData(): PointState {
        return {
            id: this.id,
            position: this.position,
            requestedPosition: this.requestedPosition,
            locked: this.lockedBy,
            changing: this.changing,
        };
    }

    public sendState(): void {
        logger.log({
            action: MESSAGE_ACTION_STATE_UPDATE,
            entity: this.TYPE_NAME,
            id: this.id,
            date: new Date(),
            data: this.dumpData(),
        });
    }
}
