"use strict";
exports.ACTION_SIGNAL_SELECT = 'ACTION_SIGNAL_SELECT';
exports.signalSelect = (id) => {
    return {
        type: exports.ACTION_SIGNAL_SELECT,
        id,
    };
};
exports.ACTION_REGISTER_ROUTES = 'ACTION_REGISTER_ROUTES';
exports.registerRoutes = (routes) => {
    return {
        type: exports.ACTION_REGISTER_ROUTES,
        routes,
    };
};
exports.ACTION_CLEAR_SELECT = 'ACTION_CLEAR_SELECT';
exports.clearSelect = () => {
    return {
        type: exports.ACTION_CLEAR_SELECT,
    };
};
//# sourceMappingURL=route-builder.js.map