"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signalContextMenu_1 = require("../actions/signalContextMenu");
const contextMenuDisplay = (state, action) => {
    const { id, coordinates } = action;
    return {
        id,
        active: true,
        coordinates,
    };
};
const initState = {
    id: 0,
    active: false,
    coordinates: {
        x: 0,
        y: 0,
    },
};
const closeContextMenu = (state) => {
    return Object.assign({}, state, { active: false });
};
exports.signalContextMenu = (state = initState, action) => {
    const { type } = action;
    switch (type) {
        case signalContextMenu_1.ACTION_DISPLAY_CONTEXT_MENU:
            return contextMenuDisplay(state, action);
        case signalContextMenu_1.ACTION_CLOSE_CONTEXT_MENU:
            return closeContextMenu(state);
        default:
            return state;
    }
};
//# sourceMappingURL=signalContextMenu.js.map