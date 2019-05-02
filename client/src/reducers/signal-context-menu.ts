import { ACTION_CONTEXT_MENU } from '../actions/signalContextMenu';

const contextMenuDisplay = (state, action) => {
    const id = action.id;
    return {id};
};

export const signalsContextMenu = (state = {active: false}, action) => {
    const {type} = action;
    switch (type) {
        case ACTION_CONTEXT_MENU:
            return contextMenuDisplay(state, action);
        default:
            return state;
    }
};
