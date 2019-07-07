import {
    ACTION_CONNECTION_CLOSE,
    ACTION_MESSAGE_RETRIEVE,
    ActionMessageRetrieve,
} from '../actions/webSocets';
import {
    AutoBlockSectorState,
    BanalizedABState,
    DumpData,
    MESSAGE_ACTION_DUMP,
    MESSAGE_ACTION_STATE_UPDATE,
    PointState,
    SectorState,
    SignalState,
    TrainRouteDump,
} from '../components/definitions/interfaces';

export interface SignalsState {
    [id: number]: SignalState;
}

export interface SectorsState {
    [id: number]: SectorState;
}

export interface PointsState {
    [id: number]: PointState;
}

export interface AutoBlockSectorsState {
    [locoNetId: number]: AutoBlockSectorState;
}

export interface BanalizedABsState {
    [locoNetId: number]: BanalizedABState;
}

export interface ObjectState {
    signals: SignalsState;
    sectors: SectorsState;
    points: PointsState;
    routeBuilder: TrainRouteDump;
    ABSectors: AutoBlockSectorsState;
    banalizedAB: BanalizedABsState
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
            case 'auto-block-sector':
                return ABSectorRetrieve(store, action);
            case 'banalized-auto-block':
                return banalizedABRetrieve(store, action);
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
        data: {sectors, signals, points, routeBuilder, autoBlockSectors, banalizedAutoBlocks},
    } = action.data;

    const sectorsData = {};
    sectors.forEach((sector) => {
        sectorsData[sector.id] = sector;
    });

    const signalsData: SignalsState = {};
    signals.forEach((signal) => {
        signalsData[signal.locoNetId] = signal;
    });

    const pointsData: PointsState = {};
    points.forEach((point) => {
        pointsData[point.id] = point;
    });

    const ABSectorsData: AutoBlockSectorsState = {};
    autoBlockSectors.forEach((sector) => {
        ABSectorsData[sector.locoNetId] = sector;
    });

    const banalizedABsData: BanalizedABsState = {};
    banalizedAutoBlocks.forEach((AB) => {
        banalizedABsData[AB.locoNetId] = AB;
    });

    return {
        ...store,
        sectors: sectorsData,
        signals: signalsData,
        points: pointsData,
        routeBuilder: routeBuilder,
        ABSectors: ABSectorsData,
        banalizedAB: banalizedABsData,
    };
};

const ABSectorRetrieve = (store: ObjectState, action: ActionMessageRetrieve<AutoBlockSectorState>): ObjectState => {
    const {data, data: {locoNetId}} = action.data;
    return {
        ...store,
        ABSectors: {
            ...store.ABSectors,
            [+locoNetId]: data,
        },
    };
};

const banalizedABRetrieve = (store: ObjectState, action: ActionMessageRetrieve<BanalizedABState>): ObjectState => {
    const {data, data: {locoNetId}} = action.data;
    return {
        ...store,
        banalizedAB: {
            ...store.banalizedAB,
            [+locoNetId]: data,
        },
    };
};

const signalRetrieve = (store: ObjectState, action: ActionMessageRetrieve<SignalState>): ObjectState => {
    const {data, data: {locoNetId}} = action.data;
    return {
        ...store,
        signals: {
            ...store.signals,
            [+locoNetId]: data,
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

const trainRouteBufferDump = (store: ObjectState, action: ActionMessageRetrieve<TrainRouteDump>): ObjectState => {
    const {data} = action.data;
    return {
        ...store,
        routeBuilder: data,
    };
};

const initState: ObjectState = {
    signals: {},
    sectors: {},
    points: {},
    ABSectors: {},
    routeBuilder: {
        buffer: [],
        hasError: false,
        locked: false,
    },
    banalizedAB: {},
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
