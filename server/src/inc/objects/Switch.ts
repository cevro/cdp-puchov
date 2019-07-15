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
import { DataDumper } from '../Factories/DateReceiver';

export default class Switch implements DataDumper<PointState> {
    public TYPE_NAME = 'switch';

    private _position: pointPosition;
    private _requestedPosition: requestedPointPosition;

    public readonly id: number;
    private lockedBy: number[] = [];
    public readonly sector: number;

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
        this.lockedBy.push(id);
        this.sendState();
    }

    public unlock(id: number) {
        this.lockedBy = this.lockedBy.filter((lockerId) => {
            return lockerId !== id;
        });
        this.sendState();
    }

    public changePosition(position: requestedPointPosition) {

        if (this.lockedBy.length > 0) {
            throw new Error();
        }
        this.requestedPosition = position;

        setTimeout(() => {
                this.position = position;
            }, 5000,
        );

    }

    public dumpData(): PointState {
        return {
            id: this.id,
            position: this.position,
            requestedPosition: this.requestedPosition,
            locked: this.lockedBy,
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
