import { Message } from '../components/definitions/interfaces';
import {
    Action,
    Dispatch,
} from 'redux';
import { requestedPointPosition } from '../components/definitions/Points';

export const ACTION_MESSAGE_RETRIEVE = 'ACTION_MESSAGE_RETRIEVE';

export interface ActionMessageRetrieve<T = any> extends Action<string> {
    data: Message<T>;
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

export function onSendMessage<T = any>(message: Message<T>): ActionMessageSend<T> {
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

export const changeSector =
    (dispatch: Dispatch<Action<string>>, id: number, state: number): ActionMessageSend<{ id: number, state: number }> => {
        return dispatch(onSendMessage({
            action: 'user-set',
            entity: 'sector',
            date: new Date(),
            id,
            data: {id, state},
        }));
    };

export const changePoint =
    (dispatch: Dispatch<Action<string>>, id: number, state: requestedPointPosition): ActionMessageSend<{ id: number, state: requestedPointPosition }> => {
        return dispatch(onSendMessage({
            action: 'user-set',
            entity: 'point',
            date: new Date(),
            id,
            data: {id, state},
        }));
    };



