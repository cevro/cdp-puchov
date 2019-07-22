"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getObjectState(accessKey, store, locoNetId) {
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
exports.getSignal = (store, signalId) => {
    return getObjectState('signals', store, signalId);
};
exports.getSignalState = (store, signalId) => {
    return getObjectState('signals', store, signalId);
};
exports.getSectorState = (store, sectorId) => {
    return getObjectState('sectors', store, sectorId);
};
exports.getTurnoutState = (store, pointId) => {
    return getObjectState('turnouts', store, pointId);
};
exports.getABSectorState = (store, sectorId) => {
    return getObjectState('ABSectors', store, sectorId);
};
exports.getBiDirABState = (store, ABId) => {
    return getObjectState('biDirABs', store, ABId);
};
//# sourceMappingURL=objectState.js.map