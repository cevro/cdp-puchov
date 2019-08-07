import {
    ACTION_CONNECTION_CLOSE,
    ACTION_MESSAGE_RETRIEVE,
    ActionMessageRetrieve,
} from '../actions/webSocets';
import {
    ABSectorState,
    BiDirABState,
    DumpData,
    MESSAGE_ACTION_DUMP,
    MESSAGE_ACTION_STATE_UPDATE,
    SectorState,
    SignalState,
} from '@definitions/interfaces';

import {
    Message,
} from '@definitions/messages';
import {
    ENTITY_AB_SECTOR,
    ENTITY_BI_DIR_AB,
    ENTITY_SECTOR,
    ENTITY_SIGNAL,
    ENTITY_TURNOUT,
} from '@definitions/entity';
import {TurnoutMessages} from '@definitions/messages/turnout';

export interface SignalsState {
    [id: number]: SignalState;
}

export interface SectorsState {
    [id: number]: SectorState;
}

export interface TurnoutsState {
    [id: number]: TurnoutMessages.StateUpdateData;
}

export interface ABSectorsState {
    [locoNetId: number]: ABSectorState;
}

export interface BiDirABsState {
    [locoNetId: number]: BiDirABState;
}

export interface LocoNetConnectorState {
    availablePorts: string[];
    status: number;
    port: string;
}

interface OS<O extends { locoNetId: number } = { locoNetId: number }> {
    [key: string]: {
        [locoNetId: number]: O;
    }
}

export interface ObjectState extends OS {

    signals: SignalsState;
    sectors: SectorsState;
    turnouts: TurnoutsState;

    ABSectors: ABSectorsState;
    biDirABs: BiDirABsState;
    //   oneDirABs: any;
    // locoNetConnector: LocoNetConnectorState;
}

const messageRetrieve = (store: ObjectState, action: ActionMessageRetrieve<Message<any>>): ObjectState => {
    if (action.message.action === MESSAGE_ACTION_STATE_UPDATE) {
        switch (action.message.entity) {
            case ENTITY_SECTOR:
                return sectorRetrieve(store, action);
            case ENTITY_SIGNAL:
                return signalRetrieve(store, action);
            case ENTITY_TURNOUT:
                return turnoutRetrieve(store, action);
            case ENTITY_AB_SECTOR:
                return ABSectorRetrieve(store, action);
            case ENTITY_BI_DIR_AB:
                return biDirABRetrieve(store, action);
            default:
                return store;
        }
    }
    if (action.message.action === MESSAGE_ACTION_DUMP) {
        switch (action.message.entity) {
            case '*':
                return dumpRetrieve(store, action);
            // case 'route-builder':
            //    return trainRouteBufferDump(store, action);
            default:
                return store;
        }
    }
    return store;

};
const dumpRetrieve = (store: ObjectState, action: ActionMessageRetrieve<Message<DumpData>>): ObjectState => {
    const {
        data: {sectors, signals, points, ABSectors, biDirABs},
    } = action.message;

    const sectorsData = {};
    sectors.forEach((sector) => {
        sectorsData[sector.locoNetId] = sector;
    });

    const signalsData: SignalsState = {};
    signals.forEach((signal) => {
        signalsData[signal.locoNetId] = signal;
    });

    const pointsData: TurnoutsState = {};
    points.forEach((point) => {
        pointsData[point.locoNetId] = point;
    });

    const ABSectorsData: ABSectorsState = {};
    ABSectors.forEach((sector) => {
        ABSectorsData[sector.locoNetId] = sector;
    });

    const biDirABsData: BiDirABsState = {};
    biDirABs.forEach((AB) => {
        biDirABsData[AB.locoNetId] = AB;
    });

    return {
        ...store,
        sectors: sectorsData,
        signals: signalsData,
        turnouts: pointsData,
        ABSectors: ABSectorsData,
        biDirABs: biDirABsData,
    };
};

function objectRetrieve<K extends keyof ObjectState, I extends keyof ObjectState[K], T extends ObjectState[K][I]>
(accessKey: K, store: ObjectState, action: ActionMessageRetrieve<Message<T>>): ObjectState {

    const {data, id} = action.message;
    return {
        ...store,
        [accessKey]: {
            ...store[accessKey],
            [+id]: data,
        },
    };
}

const ABSectorRetrieve = (store: ObjectState, action: ActionMessageRetrieve<Message<ABSectorState>>): ObjectState => {
    return objectRetrieve('ABSectors', store, action);
};

const biDirABRetrieve = (store: ObjectState, action: ActionMessageRetrieve<Message<BiDirABState>>): ObjectState => {
    return objectRetrieve('biDirABs', store, action);
};

const signalRetrieve = (store: ObjectState, action: ActionMessageRetrieve<Message<SignalState>>): ObjectState => {
    return objectRetrieve('signals', store, action);
};

const sectorRetrieve = (store: ObjectState, action: ActionMessageRetrieve<Message<SectorState>>): ObjectState => {
    return objectRetrieve('sectors', store, action);
};

const turnoutRetrieve = (store: ObjectState, action: ActionMessageRetrieve<Message<TurnoutMessages.StateUpdateData>>): ObjectState => {
    return objectRetrieve('turnouts', store, action);
};
/*
const trainRouteBufferDump = (store: ObjectState, action: ActionMessageRetrieve<Message<TrainRouteDump>>): ObjectState => {
    const {data} = action.message;
    return {
        ...store,
        //   routeBuilder: data,
    };
};
*/
const initState: ObjectState = {
    signals: {},
    sectors: {},
    turnouts: {},
    ABSectors: {},
    biDirABs: {},
    // oneDirABs: {},
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
