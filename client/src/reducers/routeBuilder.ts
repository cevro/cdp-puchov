import {
    ACTION_CLEAR_SELECT,
    ACTION_SECTOR_SELECT,
    ACTION_SIGNAL_SELECT,
    ActionRouteBuilderSelect,
} from '../actions/routeBuilder';
import {
    ACTION_MESSAGE_RETRIEVE,
    ActionMessageRetrieve,
} from '../actions/webSocets';

export interface State {
    startSignalId: number;
    endSectorId: number;
    availableRoutes: any[];
}

const initState: State = {
    startSignalId: null,
    endSectorId: null,
    availableRoutes: [],
};

const signalSelect = (state: State, action: ActionRouteBuilderSelect): State => {
    return {
        startSignalId: action.id,
        endSectorId: null,
        availableRoutes: [],
    };
};
const sectorSelect = (state: State, action: ActionRouteBuilderSelect): State => {
    if (state.startSignalId === null) {
        return state;
    }
    return {
        ...state,
        endSectorId: action.id,
    }
};

const registerRoutes = (state: State, action: ActionMessageRetrieve<{ routes: any[] }>): State => {
    if (action.data.entity === 'route-finder' && action.data.action === 'found') {
        return {
            ...state,
            startSignalId: null,
            endSectorId: null,
            availableRoutes: action.data.data.routes,
        };
    }
    return state;

};

const clearSelect = (): State => {
    return initState;
};

export const routeBuilder = (state: State = initState, action): State => {
    const {type} = action;
    switch (type) {
        case ACTION_SIGNAL_SELECT:
            return signalSelect(state, action);
        case ACTION_SECTOR_SELECT:
            return sectorSelect(state, action);
        case ACTION_MESSAGE_RETRIEVE:
            return registerRoutes(state, action);
        case ACTION_CLEAR_SELECT:
            return clearSelect();
        default:
            return state;
    }
};
