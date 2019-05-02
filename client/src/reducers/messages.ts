import {ACTION_MESSAGE_RETRIEVE} from '../actions/webSocets';

const messageRetrieve = (state, action) => {
    const newMessages = [ action.data,...state];
    if (newMessages.length > 5) {
        newMessages.pop();
    }
    return newMessages;
};

export const messages = (state = [], action) => {
    const {type} = action;
    switch (type) {
        case ACTION_MESSAGE_RETRIEVE:
            return messageRetrieve(state, action);
        default:
            return state;
    }
};
