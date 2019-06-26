import { Action } from 'redux';

interface SignalCoordinates {
    x: number;
    y: number;
}

export const ACTION_DISPLAY_CONTEXT_MENU = 'ACTION_DISPLAY_CONTEXT_MENU';

export interface ActionContextMenuDisplay extends Action<string> {
    id: number;
    coordinates: SignalCoordinates;
}

export const onSignalContextMenu = (id: number, coordinates: SignalCoordinates): ActionContextMenuDisplay => {
    return {
        type: ACTION_DISPLAY_CONTEXT_MENU,
        id,
        coordinates,
    };
};

export const ACTION_CLOSE_CONTEXT_MENU = 'ACTION_CLOSE_CONTEXT_MENU';
export const closeContextMenu = (): Action<string> => {
    return {
        type: ACTION_CLOSE_CONTEXT_MENU,
    };
};
