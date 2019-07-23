import {
    TurnoutPosition,
    RequestedTurnoutPosition,
} from "./Points";
import {LocoNetObjectState} from './interfaces';

export interface Message<T = any> {
    readonly entity: string;
    readonly action: string;
    readonly id: number;
    readonly data: T;
}

export namespace TurnoutMessages {
    /* *********** client->server ************************/
    export interface TurnoutMessage<T> extends Message<T> {
        readonly entity: 'turnout';
    }

    export const MESSAGE_ACTION_SET_POSITION = 'set-position';

    export interface ChangePositionData {
        id: number;
        state: RequestedTurnoutPosition;
    }

    export interface ChangePositionMessage extends TurnoutMessage<ChangePositionData> {
        readonly action: 'set-position';
    }

    export type ClientToServerMessages = ChangePositionMessage;

    /* *********** server->client ************************/
    export const MESSAGE_ACTION_STATE_UPDATE = 'state-update';

    export interface StateUpdateData extends LocoNetObjectState {
        position: TurnoutPosition;
        requestedPosition: RequestedTurnoutPosition;
        locked: number[];
    }

    export type StateUpdateMessage = TurnoutMessage<StateUpdateData>;

    export type ServerToClientMessages = StateUpdateMessage;
}
