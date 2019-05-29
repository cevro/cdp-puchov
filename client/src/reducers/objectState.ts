import {
    ACTION_CONNECTION_CLOSE,
    ACTION_MESSAGE_RETRIEVE,
    ActionMessageRetrieve,
} from '../actions/webSocets';
import {
    DumpData,
    MESSAGE_ACTION_DUMP,
    MESSAGE_ACTION_STATE_UPDATE,
    PointState,
    SectorState,
    SignalState,
} from '../components/definitions/interfaces';

interface SignalsState {
    [id: number]: SignalState;
}

export interface SectorsState {
    [id: number]: SectorState;
}

interface PointsState {
    [id: number]: PointState;
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
            case '*':
                return dumpRetrieve(store, action);
            case 'route-builder':
                return trainRouteBufferDump(store, action);
            default:
                return store;
        }
    }
    return store;

};
const dumpRetrieve = (store: ObjectState, action: ActionMessageRetrieve<DumpData>): ObjectState => {
    const {
        data: {sectors, signals, points},
    } = action.data;

    const sectorsData = {};
    sectors.forEach((sector) => {
        sectorsData[sector.id] = sector;
    });

    const signalsData: SignalsState = {};
    signals.forEach((signal) => {
        signalsData[signal.id] = signal;
    });

    const pointsData: PointsState = {};
    points.forEach((point) => {
        pointsData[point.id] = point;
    });

    return {
        ...store,
        sectors: sectorsData,
        signals: signalsData,
        points: pointsData,
    };
};

const signalRetrieve = (store: ObjectState, action: ActionMessageRetrieve<SignalState>): ObjectState => {
    const {data, data: {id}} = action.data;
    return {
        ...store,
        signals: {
            ...store.signals,
            [+id]: data,
        },
    };
};

const sectorRetrieve = (store: ObjectState, action: ActionMessageRetrieve<SectorState>): ObjectState => {
    const {data, data: {id}} = action.data;
    return {
        ...store,
        sectors: {
            ...store.sectors,
            [+id]: data,
        },
    };
};

const pointRetrieve = (store: ObjectState, action: ActionMessageRetrieve<PointState>): ObjectState => {
    const {data, data: {id}} = action.data;
    return {
        ...store,
        points: {
            ...store.points,
            [+id]: data,
        },
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
        case ACTION_CONNECTION_CLOSE:
            return initState;
        default:
            return state;
    }
};
