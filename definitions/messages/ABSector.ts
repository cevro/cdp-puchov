import {LocoNetDefinition} from '../interfaces';
import {
    Message,
    MESSAGE_ACTION_STATE_UPDATE_GLOBAL,
} from '../messages';

export namespace ABSectorMessages {
    export type ABSectorMessage<T, A> = Message<T, 'AB-sector', A>;

    /* *********** client->server ************************/
    export interface SetBlockConditionData extends LocoNetDefinition {
        state: number;
    }

    export type RemoveErrorData = LocoNetDefinition;

    export type SetBlockConditionMessage = ABSectorMessage<SetBlockConditionData, 'set-block-condition'>
    export type RemoveErrorMessage = ABSectorMessage<RemoveErrorData, 'remove-error'>;

    export type ClientToServerMessages = RemoveErrorMessage | SetBlockConditionMessage;

    /* *********** server->client ************************/
    export const MESSAGE_ACTION_STATE_UPDATE = MESSAGE_ACTION_STATE_UPDATE_GLOBAL;

    export interface StateUpdateData extends LocoNetDefinition {
        state: number;
        errorCode: number,
        errorMessage: string,
        active: number,
        fullBlockConditionActive: number;
    }

    export type StateUpdateMessage = ABSectorMessage<StateUpdateData, 'state-update'> ;

    export type ServerToClientMessages = StateUpdateMessage;
}
