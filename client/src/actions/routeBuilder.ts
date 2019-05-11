export const ACTION_SIGNAL_SELECT = 'ACTION_SIGNAL_SELECT';

export const signalSelect = (id) => {
    return {
        type: ACTION_SIGNAL_SELECT,
        id,
    };
};

export const ACTION_REGISTER_ROUTES = 'ACTION_REGISTER_ROUTES';

export const registerRoutes = (routes) => {
    return {
        type: ACTION_REGISTER_ROUTES,
        routes,
    };
};

export const ACTION_CLEAR_SELECT = 'ACTION_CLEAR_SELECT';
export const clearSelect = () => {
    return {
        type: ACTION_CLEAR_SELECT,
    };
};

