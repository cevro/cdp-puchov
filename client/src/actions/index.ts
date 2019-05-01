export const ACTION_SIGNAL_CONTEXT_MENU_DISPLAY = 'ACTION_SIGNAL_CONTEXT_MENU_DISPLAY';

export const singalContextMenuDisplay = (data) => {
    return {
        type: ACTION_SIGNAL_CONTEXT_MENU_DISPLAY,
        data,
    };
};
