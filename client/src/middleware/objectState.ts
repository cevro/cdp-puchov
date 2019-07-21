import {Store} from '../reducers';
import {
    AutoBlockSectorState,
    BanalizedABState,
    PointState,
    SectorState,
    SignalState,
} from '../components/definitions/interfaces';

function getObjectState<T>(accessKey: string, store: Store, locoNetId: number): T {
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
    return getObjectState<SignalState>('signals', store, signalId);
};
export const getSignalState = (store: Store, signalId: number): SignalState => {
    return getObjectState<SignalState>('signals', store, signalId);
};

export const getSectorState = (store: Store, sectorId: number): SectorState => {
    return getObjectState<SectorState>('sectors', store, sectorId);
};
export const getPointState = (store: Store, pointId: number): PointState => {
    return getObjectState<PointState>('points', store, pointId);
};

export const getABSectorState = (store: Store, sectorId: number): AutoBlockSectorState => {
    return getObjectState<AutoBlockSectorState>('ABSectors', store, sectorId);
};

export const getBanalizedABState = (store: Store, ABId: number): BanalizedABState => {
    return getObjectState<BanalizedABState>('banalizedAB', store, ABId);
};
