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
import {Message} from "@definitions/messages";
import {TrainRouteDump} from '@definitions/interfaces';

export interface State {
    startSignalId: number;
    endSectorId: number;
    availableRoutes: any[];
    routeBuilderState: TrainRouteDump;
}

const initState: State = {
    startSignalId: null,
    endSectorId: null,
    availableRoutes: [],
    routeBuilderState: {
        buffer: [],
        hasError: false,
        locked: false,
    },
};

const signalSelect = (state: State, action: ActionRouteBuilderSelect): State => {
    return {
        ...state,
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

const registerRoutes = (state: State, action: ActionMessageRetrieve<Message<{ routes: any[] }>>): State => {
    if (action.message.entity === 'route-finder' && action.message.action === 'found') {
        return {
            ...state,
            startSignalId: null,
            endSectorId: null,
            availableRoutes: action.message.data.routes,
        };
    }
    return state;

};

const clearSelect = (state: State): State => {
    return {
        ...state,
        startSignalId: null,
        endSectorId: null,
        availableRoutes: [],
    };
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
            return clearSelect(state);
        default:
            return state;
    }
};
