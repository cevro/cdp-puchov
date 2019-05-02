"use strict";
const signal_context_menu_1 = require("../actions/signal-context-menu");
const contextMenuDisplay = (state, action) => {
    const { x, y, id } = action.data;
    return { x, y, id, active: !state.active };
};
exports.signalsContextMenu = (state = { active: false }, action) => {
    const { type } = action;
    switch (type) {
        case signal_context_menu_1.ACTION_SIGNAL_CONTEXT_MENU_DISPLAY:
            return contextMenuDisplay(state, action);
        default:
            return state;
    }
};
//# sourceMappingURL=signal-context-menu.js.map