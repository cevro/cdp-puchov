import {Message} from '../components/definitions/messages';
import {
    Action,
    Dispatch,
} from 'redux';
import {RequestedTurnoutPosition} from '../components/definitions/Points';
import {
    ENTITY_AB_SECTOR,
    ENTITY_SECTOR,
    ENTITY_SIGNAL,
    ENTITY_TURNOUT,
} from '../../../definitions/consts';
import {TurnoutMessages} from "../../../definitions/messages";

export const ACTION_MESSAGE_RETRIEVE = 'ACTION_MESSAGE_RETRIEVE';

export interface ActionMessageRetrieve<T extends Message<any> = Message<any>> extends Action<string> {
    data: T;
}

export const onMessageRetrieve = (data: Message): ActionMessageRetrieve => {
    return {
        type: ACTION_MESSAGE_RETRIEVE,
        data,
    };
};

export const ACTION_MESSAGE_SEND = 'ACTION_MESSAGE_SEND';

export interface ActionMessageSend<T = any> extends Action<string> {
    message: Message<T>
}

export function onSendMessage<T extends Message<any> = Message<any>>(message: T): ActionMessageSend<T> {

    return {
        type: ACTION_MESSAGE_SEND,
        message,
    };
}

export const ACTION_CONNECTION_CLOSE = 'ACTION_CONNECTION_CLOSE';
export const connectionClose = (): Action<string> => {
    return {
        type: ACTION_CONNECTION_CLOSE,
    };
};

export const ACTION_SEND_SUCCESS = 'ACTION_SEND_SUCCESS';

export interface ActionSendSuccess extends Action<string> {
    id: string;
}

export const successSend = (id: string): ActionSendSuccess => {
    return {
        type: ACTION_SEND_SUCCESS,
        id,
    }
};

export function send<T = any, M extends Message<any> = Message<any>>
(dispatch: Dispatch<Action<string>>, id: number, entity: string, action: string, data: T): ActionMessageSend<M> {
    return dispatch(onSendMessage<M>({
        action,
        entity,
        date: new Date(),
        id,
        data,
    }));
}

export const changeSector =
    (dispatch: Dispatch<Action<string>>, id: number, state: number): ActionMessageSend<{ id: number, state: number }> => {
        return send(dispatch, id, ENTITY_SECTOR, 'set-state', {id, state});
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

export const changePoint =
    (dispatch: Dispatch<Action<string>>, id: number, state: RequestedTurnoutPosition): ActionMessageSend<TurnoutMessages.ChangePositionMessage> => {
        return dispatch(onSendMessage({
            action: TurnoutMessages.MESSAGE_ACTION_SET_POSITION,
            entity: ENTITY_TURNOUT,
            date: new Date(),
            id,
            data: {id, state},
        }));
    };

export const changeABCondition =
    (dispatch: Dispatch<Action<string>>, id: number, state: number): ActionMessageSend<Message<{ id: number, state: number }>> => {
        return dispatch(onSendMessage({
            action: 'switch-block-condition',
            entity: ENTITY_AB_SECTOR,
            date: new Date(),
            id,
            data: {id, state},
        }));
    };

export const removeABError =
    (dispatch: Dispatch<Action<string>>, id: number): ActionMessageSend<Message<{ id: number }>> => {
        return dispatch(onSendMessage({
            action: 'remove-error',
            entity: ENTITY_AB_SECTOR,
            date: new Date(),
            id,
            data: {id},
        }));
    };

export const changeABDir =
    (dispatch: Dispatch<Action<string>>, id: number, dir: -1 | 1): ActionMessageSend<Message<{ id: number, dir: -1 | 1 }>> => {
        return dispatch(onSendMessage({
            action: 'change-dir',
            entity: 'banalized-auto-block',
            date: new Date(),
            id,
            data: {id, dir},
        }));
    };



