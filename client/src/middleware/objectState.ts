import {Store} from '../reducers';
import {
    ABSectorState,
    BiDirABState,
    SectorState,
    SignalState,
} from '@definitions/interfaces';
import {ObjectState} from '../reducers/objectState';
import {TurnoutMessages} from '@definitions/messages/turnout';

function getObjectState<K extends keyof ObjectState, I extends keyof ObjectState[K]>
(accessKey: K, store: Store, locoNetId: I): ObjectState[K][I] {
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

export const getSignalState = (store: Store, signalId: number): SignalState => {
    return getObjectState('signals', store, signalId);
};

export const getSectorState = (store: Store, sectorId: number): SectorState => {
    return getObjectState('sectors', store, sectorId);
};
export const getTurnoutState = (store: Store, pointId: number): TurnoutMessages.StateUpdateData => {
    return getObjectState('turnouts', store, pointId);
};

export const getABSectorState = (store: Store, sectorId: number): ABSectorState => {
    return getObjectState('ABSectors', store, sectorId);
};

export const getBiDirABState = (store: Store, ABId: number): BiDirABState => {
    return getObjectState('biDirABs', store, ABId);
};
