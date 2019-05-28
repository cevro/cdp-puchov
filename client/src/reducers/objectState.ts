import {
    ACTION_MESSAGE_RETRIEVE,
    ActionMessageRetrieve,
} from '../actions/webSocets';
import { pointPosition } from '../components/definitions/Points';
import {
    MESSAGE_ACTION_DUMP,
    MESSAGE_ACTION_STATE_UPDATE,
    PointState,
} from '../components/definitions/interfaces';

interface SignalsState {
    [id: number]: number;
}

interface SectorsState {
    [id: number]: number;
}

interface PointsState {
    [id: number]: {
        state: pointPosition;
        locked: boolean;
    };
}

export interface ObjectState {
    signals: SignalsState;
    sectors: SectorsState;
    points: PointsState;
    trainRouteBuffer: any[];
}

const messageRetrieve = (store: ObjectState, action: ActionMessageRetrieve): ObjectState => {
    if (action.data.action === MESSAGE_ACTION_STATE_UPDATE) {
        switch (action.data.entity) {
            case 'sector':
                return sectorRetrieve(store, action);
            case 'signal':
                return signalRetrieve(store, action);
            case 'point':
                return pointRetrieve(store, action);
            default:
                return store;
        }
    }
    if (action.data.action === MESSAGE_ACTION_DUMP) {
        switch (action.data.entity) {
            //    case 'sector':
            //          return sectorDumpRetrieve(store, action);
            case 'signal':
                return signalDumpRetrieve(store, action);
            case 'point':
                return pointDumpRetrieve(store, action);
            case 'route-builder':
                return trainRouteBufferDump(store, action);
            default:
                return store;
        }
    }
    return store;

};

const signalRetrieve = (store: ObjectState, action: ActionMessageRetrieve<{ state: number }>): ObjectState => {
    const {id, data} = action.data;
    return {
        ...store,
        signals: {
            ...store.signals,
            [+id]: data.state,
        },
    };
};

const signalDumpRetrieve = (store: ObjectState, action: ActionMessageRetrieve<{ state: number, id: number }[]>): ObjectState => {
    const {data} = action.data;
    const newData: SignalsState = {};
    data.forEach((signal) => {
        newData[signal.id] = signal.state;
    });
    return {
        ...store,
        signals: newData,
    };
};

const sectorRetrieve = (store: ObjectState, action: ActionMessageRetrieve<{ state: number }>): ObjectState => {
    const {id, data: {state}} = action.data;
    return {
        ...store,
        sectors: {
            ...store.sectors,
            [+id]: state,
        },
    };
};

const pointRetrieve = (store: ObjectState, action: ActionMessageRetrieve<PointState>): ObjectState => {
    const {id, data: {state, locked}} = action.data;
    return {
        ...store,
        points: {
            ...store.points,
            [+id]: {state, locked},
        },
    };
};

const pointDumpRetrieve = (store: ObjectState, action: ActionMessageRetrieve<PointState[]>): ObjectState => {
    const {data} = action.data;
    const newData: PointsState = {};
    data.forEach((point) => {
        newData[point.id] = {state: point.state, locked: point.locked};
    });
    return {
        ...store,
        points: newData,
    };
};
const trainRouteBufferDump = (store: ObjectState, action: ActionMessageRetrieve<any[]>): ObjectState => {
    const {data} = action.data;
    return {
        ...store,
        trainRouteBuffer: data,
    };
};

const initState = {
    signals: {},
    sectors: {},
    points: {},
    trainRouteBuffer: [],
};

export const objectState = (state: ObjectState = initState, action): ObjectState => {
    const {type} = action;
    switch (type) {
        case ACTION_MESSAGE_RETRIEVE:
            return messageRetrieve(state, action);

        default:
            return state;
    }
};
