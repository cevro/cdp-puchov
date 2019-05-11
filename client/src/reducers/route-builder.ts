import {
    ACTION_CLEAR_SELECT,
    ACTION_REGISTER_ROUTES,
    ACTION_SIGNAL_SELECT,
} from '../actions/routeBuilder';

const signalSelect = (state, action) => {
    const {signalFrom} = state;
    const {id} = action;
    if (signalFrom === id) {
        return {...state, signalFrom: null, signalTo: null};
    }
    if (signalFrom === null) {
        return {...state, signalFrom: id};
    }
    return {...state, signalTo: id};
};

const registerRoutes = (state, action) => {
    return {...state, availableRoutes: action.routes};
};

const clearSelect = (state) => {
    return {
        ...state,
        signalFrom: null,
        signalTo: null,
    };
};

export const routeBuilder = (state = {signalFrom: null, signalTo: null, availableRoutes: []}, action) => {
    const {type} = action;
    switch (type) {
        case ACTION_SIGNAL_SELECT:
            return signalSelect(state, action);
        case ACTION_REGISTER_ROUTES:
            return registerRoutes(state, action);
        case ACTION_CLEAR_SELECT:
            return clearSelect(state);
        default:
            return state;
    }
};
