import {
    ACTION_CLOSE_CONTEXT_MENU,
    ACTION_DISPLAY_CONTEXT_MENU,
} from '../actions/signalContextMenu';

export interface State {
    active: boolean;
    id: number;
    coordinates: {
        x: number;
        y: number;
    };
}

const contextMenuDisplay = (state: State, action): State => {
    const {id, coordinates} = action;
    return {
        id,
        active: true,
        coordinates,
    };
};
const initState: State = {
    id: 0,
    active: false,
    coordinates: {
        x: 0,
        y: 0,
    },
};
const closeContextMenu = (state: State): State => {
    return {
        ...state,
        active: false,
    }
};

export const signalContextMenu = (state: State = initState, action): State => {
    const {type} = action;
    switch (type) {
        case ACTION_DISPLAY_CONTEXT_MENU:
            return contextMenuDisplay(state, action);
        case ACTION_CLOSE_CONTEXT_MENU:
            return closeContextMenu(state);
        default:
            return state;
    }
};
