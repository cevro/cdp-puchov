import { SignalsState } from '../reducers/signals';

export const getSignal = (store: SignalsState, signalId: number): number => {
    return 0;
    /* let signalState = 5;

     for (const id in store) {
         if (store.hasOwnProperty(id)) {
             if (+id == signalId) {
                 signalState = store[id];
             }
         }
     }
     return signalState;*/
};
