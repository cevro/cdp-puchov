import { Store } from '../reducers';
import {
    AutoBlockSectorState,
    BanalizedABState,
    PointState,
    SectorState,
    SignalState,
} from '../components/definitions/interfaces';

export const getSignal = (store: Store, signalId: number): SignalState => {
    const {signals} = store.objectState;
    let state = undefined;
    for (const id in signals) {
        if (signals.hasOwnProperty(id)) {
            if (+id === signalId) {
                state = signals[signalId];
            }
        }
    }
    return state;
};
export const getSectorState = (store: Store, sectorId: number): SectorState => {
    let state = undefined;
    const {sectors} = store.objectState;
    for (const id in sectors) {
        if (sectors.hasOwnProperty(id)) {
            if (+id === sectorId) {
                state = sectors[id];
            }
        }
    }
    return state;
};
export const getPointState = (store: Store, sectorId: number): PointState => {
    let state = undefined;
    const {points} = store.objectState;
    for (const id in points) {
        if (points.hasOwnProperty(id)) {
            if (+id === sectorId) {
                state = points[id];
            }
        }
    }
    return state;
};

export const getABSectorState = (store: Store, sectorId: number): AutoBlockSectorState => {
    let state = undefined;
    const {ABSectors} = store.objectState;
    for (const id in ABSectors) {
        if (ABSectors.hasOwnProperty(id)) {
            if (+id === sectorId) {
                state = ABSectors[id];
            }
        }
    }
    return state;
};

export const getBanalizedABState = (store: Store, ABId: number): BanalizedABState => {
    let state = undefined;
    const {banalizedAB} = store.objectState;
    for (const id in banalizedAB) {
        if (banalizedAB.hasOwnProperty(id)) {
            if (+id === ABId) {
                state = banalizedAB[id];
            }
        }
    }
    return state;
};
