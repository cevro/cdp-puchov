import {Action} from 'redux';

export interface ToggleSignalAction extends Action<string> {
    signalType: number;
}

export const ACTION_TOGGLE_SIGNAL_TEXT = 'ACTION_TOGGLE_SIGNAL_TEXT';
export const toggleSignalText = (signalType: number): ToggleSignalAction => {
    return {
        type: ACTION_TOGGLE_SIGNAL_TEXT,
        signalType,
    };
};

export const ACTION_TOGGLE_POINT_TEXT = 'ACTION_TOGGLE_POINT_TEXT';
export const toggleTurnoutText = (): Action<string> => {
    return {
        type: ACTION_TOGGLE_POINT_TEXT,
    };
};
/*
export const ACTION_TOGGLE_SECTOR_TEXT = 'ACTION_TOGGLE_SECTOR_TEXT';
export const toggleSectorText = (): Action<string> => {
    return {
        type: ACTION_TOGGLE_SECTOR_TEXT,
    };
};*/
