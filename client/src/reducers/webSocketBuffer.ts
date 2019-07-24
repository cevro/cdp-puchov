import {
    ACTION_MESSAGE_SEND,
    ACTION_SEND_SUCCESS,
} from '../actions/webSocets';
import {Message} from '@definitions/messages';

export interface State {
    messages: {
        [inedx: number]: Message;
    };
    index: number;
}

const addToBuffer = (state: State, action): State => {
    state.index++;
    return {
        ...state,
        messages: {
            ...state.messages,
            [state.index]: action.message,
        },
    };
};

const removeFromBuffer = (state: State, action): State => {
    const messages = {};
    for (const id in state.messages) {
        if (state.messages.hasOwnProperty(id)) {
            if (id !== action.id) {
                messages[id] = state.messages[id]
            }
        }
    }
    return {
        ...state,
        messages,
    };
};

export const webSocket = (state: State = {index: 0, messages: {}}, action): State => {
    const {type} = action;
    switch (type) {
        case ACTION_MESSAGE_SEND:
            return addToBuffer(state, action);
        case ACTION_SEND_SUCCESS:
            return removeFromBuffer(state, action);
        default:
            return state;
    }
};
