import {
    RequestedTurnoutPosition,
    TurnoutPosition,
} from '../Points';
import {LocoNetObject} from '../interfaces';
import {
    Message,
    MESSAGE_ACTION_STATE_UPDATE_GLOBAL,
} from '../messages';

export namespace TurnoutMessages {

    export type TurnoutMessage<T, A> = Message<T, 'turnout', A>;

    /* *********** client->server ************************/

    export const MESSAGE_ACTION_SET_POSITION = 'set-position';

    export interface ChangePositionData {
        id: number;
        state: RequestedTurnoutPosition;
    }

    export type ChangePositionMessage = TurnoutMessage<ChangePositionData, 'set-position'>;

    export type ClientToServerMessages = ChangePositionMessage;

    /* *********** server->client ************************/
    export const MESSAGE_ACTION_STATE_UPDATE = MESSAGE_ACTION_STATE_UPDATE_GLOBAL;

    export interface StateUpdateData extends LocoNetObject {
        position: TurnoutPosition;
        requestedPosition: RequestedTurnoutPosition;
        locked: number[];
    }

    export type StateUpdateMessage = TurnoutMessage<StateUpdateData, 'state-update'>;

    export type ServerToClientMessages = StateUpdateMessage;
}
