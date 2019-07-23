import {LocoNetObject} from '../interfaces';
import {
    Message,
    MESSAGE_ACTION_STATE_UPDATE_GLOBAL,
} from '../messages';

export namespace ABSectorMessages {
    export type ABSectorMessage<T, A> = Message<T, 'AB-sector', A>;

    /* *********** client->server ************************/

    /* *********** server->client ************************/
    export const MESSAGE_ACTION_STATE_UPDATE = MESSAGE_ACTION_STATE_UPDATE_GLOBAL;

    export interface StateUpdateData extends LocoNetObject {
        state: number;
        errorCode: number,
        errorMessage: string,
        active: number,
        fullBlockConditionActive: number;
    }

    export type StateUpdateMessage = ABSectorMessage<StateUpdateData, 'state-update'> ;

    export type ServerToClientMessages = StateUpdateMessage;
}
