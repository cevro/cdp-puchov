import {Store} from '../reducers';
import {
    ABSectorState,
    BiDirABState,
    TurnoutState,
    SectorState,
    SignalState,
} from '../components/definitions/interfaces';
import {ObjectState} from "../reducers/objectState";

function getObjectState<K extends keyof ObjectState, I extends keyof ObjectState[K]>(accessKey: K, store: Store, locoNetId: I): ObjectState[K][I] {
    const objects = store.objectState[accessKey];
    let state = undefined;
    for (const id in objects) {
        if (objects.hasOwnProperty(id)) {
            if (+id === locoNetId) {
                state = objects[id];
            }
        }
    }
    return state;
}

/**
 *
 * @param store
 * @param signalId
 */
export const getSignal = (store: Store, signalId: number): SignalState => {
    return getObjectState('signals', store, signalId);
};
export const getSignalState = (store: Store, signalId: number): SignalState => {
    return getObjectState('signals', store, signalId);
};

export const getSectorState = (store: Store, sectorId: number): SectorState => {
    return getObjectState('sectors', store, sectorId);
};
export const getPointState = (store: Store, pointId: number): TurnoutState => {
    return getObjectState('turnouts', store, pointId);
};

export const getABSectorState = (store: Store, sectorId: number): ABSectorState => {
    return getObjectState('ABSectors', store, sectorId);
};

export const getBiDirABState = (store: Store, ABId: number): BiDirABState => {
    return getObjectState('biDirABs', store, ABId);
};
