import {
    ACTION_TOGGLE_POINT_TEXT,
    ACTION_TOGGLE_SIGNAL_TEXT,
    ToggleSignalAction,
} from '../actions/displayOptions';

export interface displayOptionsState {
    signals: {
        [type: number]: boolean;
    };
    points: boolean;
}

const toggleSignal = (state: displayOptionsState, action: ToggleSignalAction): displayOptionsState => {
    const {signalType} = action;
    let status = true;
    if (state.signals.hasOwnProperty(signalType)) {
        status = !state.signals[signalType];
    }
    return {
        ...state,
        signals: {
            ...state.signals,
            [signalType]: status,
        },
    };
};

const togglePoints = (state: displayOptionsState): displayOptionsState => {
    return {
        ...state,
        points: !state.points,
    };
};

const initialState: displayOptionsState = {
    signals: {},
    points: false,
};

export const displayOptions = (state: displayOptionsState = initialState, action) => {
    const {type} = action;
    switch (type) {
        case ACTION_TOGGLE_SIGNAL_TEXT:
            return toggleSignal(state, action);
        case ACTION_TOGGLE_POINT_TEXT:
            return togglePoints(state);
        default:
            return state;
    }
};
