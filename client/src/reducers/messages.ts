import { ACTION_MESSAGE_RETRIEVE } from '../actions/webSocets';
import { Message } from '../components/definitions/messages';


const messageRetrieve = (state, action) => {
    const newMessages = [action.data, ...state];
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
