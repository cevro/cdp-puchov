export const ACTION_CONTEXT_MENU = 'ACTION_CONTEXT_MENU';

export const onSignalContextMenu = (id: number) => {
    return {
        type: ACTION_CONTEXT_MENU,
        id,
    };
};
