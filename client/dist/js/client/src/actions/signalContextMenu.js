"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTION_DISPLAY_CONTEXT_MENU = 'ACTION_DISPLAY_CONTEXT_MENU';
exports.onSignalContextMenu = (id, coordinates) => {
    return {
        type: exports.ACTION_DISPLAY_CONTEXT_MENU,
        id,
        coordinates,
    };
};
exports.ACTION_CLOSE_CONTEXT_MENU = 'ACTION_CLOSE_CONTEXT_MENU';
exports.closeContextMenu = () => {
    return {
        type: exports.ACTION_CLOSE_CONTEXT_MENU,
    };
};
//# sourceMappingURL=signalContextMenu.js.map