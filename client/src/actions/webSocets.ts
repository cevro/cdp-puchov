import { Message } from '../components/definitions/interfaces';
import {
    Action,
    Dispatch,
} from 'redux';

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
export const onSendMessage = (message: Message) => {
    return {
        type: ACTION_MESSAGE_SEND,
        message,
    };
};

export const ACTION_CONNECTION_CLOSE = 'ACTION_CONNECTION_CLOSE';
export const connectionClose = (): Action<string> => {
    return {
        type: ACTION_CONNECTION_CLOSE,
    };
};

export const changeSector = (dispatch: Dispatch<Action<string>>, id: number, state: number) => {
    return dispatch(onSendMessage({
        action: 'user-set',
        entity: 'sector',
        date: new Date(),
        id,
        data: {id, state},
    }));
};
export const ACTION_SEND_SUCCESS = 'ACTION_SEND_SUCCESS';
export const successSend = (id: string) => {
    return {
        type: ACTION_SEND_SUCCESS,
        id,
    }
};


