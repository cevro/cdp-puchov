import {
    TurnoutPosition,
    RequestedTurnoutPosition,
} from "./Points";
import {LocoNetObjectState} from './interfaces';

export interface Message<T = any> {
    entity: string;
    action: string;
    date: Date;
    id: number;
    data: T;
}

export namespace TurnoutMessages {
    /* *********** client->server ************************/
    export type TurnoutMessage<T> = Message<T> ;

    export const MESSAGE_ACTION_SET_POSITION = 'set-position';

    export interface ChangePositionData {
        id: number;
        state: RequestedTurnoutPosition;
    }

    export type ChangePositionMessage = TurnoutMessage<ChangePositionData>;

    /* *********** server->client ************************/
    export const MESSAGE_ACTION_STATE_UPDATE = 'state-update';

    export interface StateUpdateData extends LocoNetObjectState {
        position: TurnoutPosition;
        requestedPosition: RequestedTurnoutPosition;
        locked: number[];
    }

    export type StateUpdateMessage = TurnoutMessage<StateUpdateData>;
}
