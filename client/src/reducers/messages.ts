import {
    ACTION_MESSAGE_RETRIEVE,
    ActionMessageRetrieve,
} from '../actions/webSocets';
import {Message} from '@definitions/messages';

const messageRetrieve = (state, action: ActionMessageRetrieve<Message<any>>) => {
    const newMessages = [action.message, ...state];
    if (newMessages.length > 20) {
        newMessages.pop();
    }
    return newMessages;
};

export const messages = (state: Message[] = [], action) => {
    const {type} = action;
    switch (type) {
        case ACTION_MESSAGE_RETRIEVE:
            return messageRetrieve(state, action);
        default:
            return state;
    }
};
