import { Message } from '../components/definitions/interfaces';
import { Action } from 'redux';

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
export const onSendMessage = (text: string) => {
    return {
        type: ACTION_MESSAGE_SEND,
        text,
    };
};


