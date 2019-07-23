import {logger} from '../../../webSocetServer';
import {
    TurnoutDefinition,
    TurnoutPosition,
    RequestedTurnoutPosition,
} from '../../../../../definitions/Points';
import {PointLockedError} from '../../Exceptions/Errors';
import {DataDumper} from '../../Factories/DateReceiver';
import {TurnoutMessages} from "../../../../../definitions/messages/turnout";
import {ENTITY_TURNOUT} from "../../../../../definitions/consts";
import {locoNetConnector} from "../../SerialConnector/SerialConnector";

export default class Turnout implements DataDumper<TurnoutMessages.StateUpdateData> {

    private _position: TurnoutPosition;
    private _requestedPosition: RequestedTurnoutPosition;

    public readonly locoNetId: number;
    private lockedBy: number[] = [];
    public readonly sector: number;

    constructor(definition: TurnoutDefinition) {
        this.locoNetId = definition.locoNetId;
        this._position = 0;
        this.sector = definition.sector;
        this._requestedPosition = null;
    }

    set position(value: TurnoutPosition) {
        this._position = value;
        this.sendState();
    }

    get position() {
        return this._position;
    }

    set requestedPosition(value: RequestedTurnoutPosition) {
        this._requestedPosition = value;
        this.sendState();
    }

    get requestedPosition(): RequestedTurnoutPosition {
        return this._requestedPosition;
    }

    public check(position: RequestedTurnoutPosition): void {
        if (this.position == position) {
            return;
        }
        if (this.lockedBy.length) {
            throw new PointLockedError(this, position);
        }
    }

    public async lock(trainLockId: number, position: RequestedTurnoutPosition) {
        if (this.position !== position) {
            await this.changePosition(position);
        }
        this.lockedBy.push(trainLockId);
        this.sendState();
    }

    public unlock(id: number) {
        this.lockedBy = this.lockedBy.filter((lockerId) => {
            return lockerId !== id;
        });
        this.sendState();
    }

    private changePosition(position: RequestedTurnoutPosition) {
        this.requestedPosition = position;
        locoNetConnector.send({
            locoNetId: this.locoNetId,
            type: 's',
            value: position,
        });
    }

    public dumpData(): TurnoutMessages.StateUpdateData {
        return {
            locoNetId: this.locoNetId,
            position: this.position,
            requestedPosition: this.requestedPosition,
            locked: this.lockedBy,
        };
    }

    public sendState(): void {
        logger.log<TurnoutMessages.StateUpdateMessage>({
            action: TurnoutMessages.MESSAGE_ACTION_STATE_UPDATE,
            entity: ENTITY_TURNOUT,
            id: this.locoNetId,
            data: this.dumpData(),
        });
    }
}
