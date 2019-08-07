import {
    Action,
    Dispatch,
} from 'redux';
import {
    Message,
} from '@definitions/messages';
import {
    ENTITY_BI_DIR_AB,
    ENTITY_SECTOR,
    ENTITY_SIGNAL,
    ENTITY_TURNOUT,
} from '@definitions/entity';
import {RequestedTurnoutPosition} from '@definitions/points';
import {
    ActionMessageSend,
    onSendMessage,
} from '../webSocets';
import {TurnoutMessages} from '@definitions/messages/turnout';

export function send<T>
(dispatch: Dispatch<Action<string>>, id: number, entity: string, action: string, data: T): ActionMessageSend<Message<T>> {
    return dispatch(onSendMessage({
        action,
        entity,
        date: new Date(),
        id,
        data,
    }));
}

export const changeSector =
    (dispatch: Dispatch<Action<string>>, id: number, state: number): ActionMessageSend<Message<{ id: number; state: number }>> => {
        return send<{ id: number; state: number }>(dispatch, id, ENTITY_SECTOR, 'set-state', {id, state});
    };

export const changeSignal =
    (dispatch: Dispatch<Action<string>>, id: number, state: number): ActionMessageSend<Message<{ id: number, state: number }>> => {
        return dispatch(onSendMessage({
            action: 'set-state',
            entity: ENTITY_SIGNAL,
            date: new Date(),
            id,
            data: {id, state},
        }));
    };

export const changeTurnout =
    (dispatch: Dispatch<Action<string>>, id: number, requestedPosition: RequestedTurnoutPosition):
        ActionMessageSend<TurnoutMessages.ChangePositionMessage> => {
        return dispatch(onSendMessage({
            action: TurnoutMessages.MESSAGE_ACTION_SET_POSITION,
            entity: ENTITY_TURNOUT,
            date: new Date(),
            id,
            data: {
                id,
                requestedPosition,
            },
        }));
    };

export const changeABDir =
    (dispatch: Dispatch<Action<string>>, id: number, dir: -1 | 1): ActionMessageSend<Message<{ id: number, dir: -1 | 1 }>> => {
        return dispatch(onSendMessage({
            action: 'change-dir',
            entity: ENTITY_BI_DIR_AB,
            date: new Date(),
            id,
            data: {id, dir},
        }));
    };