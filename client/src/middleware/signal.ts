import { SignalsState } from '../reducers/signals';

export const getSignal = (store: SignalsState, signalId: number): number => {
    //return signalId % 16;
    let signalState = 5;
    for (const id in store) {
        if (id == signalId) {
            signalState = store[id];
        }
    }
    return signalState;
};
