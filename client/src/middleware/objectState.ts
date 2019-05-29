import { Store } from '../reducers';
import {
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
