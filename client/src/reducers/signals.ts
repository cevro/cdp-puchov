import { ACTION_SIGNAL_RETRIEVE } from '../actions/webSocets';

export interface SignalsState {
    [id: number]: number;
}

const signalRetrieve = (reducerState, action) => {
    const {id, state} = action.data;
    return {
        ...reducerState,
        [+id]: state,
    };
};

export const signals = (state = {}, action) => {
    const {type} = action;
    switch (type) {
        case ACTION_SIGNAL_RETRIEVE:
            return signalRetrieve(state, action);
        default:
            return state;
    }
};
