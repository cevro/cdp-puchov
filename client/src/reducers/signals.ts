import {ACTION_SIGNAL_RETRIEVE} from '../actions/webSocets';

const signalRetrieve = (state, action) => {
    const {name} = action.data;
    return {...state, [name]: action.data};
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
