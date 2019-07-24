import {
    Action,
    Dispatch,
} from 'redux';

import {RouteFinderRequest} from '@definitions/interfaces';
import { onSendMessage } from './webSocets';
import {Message} from '@definitions/messages';

export const ACTION_SIGNAL_SELECT = 'ACTION_SIGNAL_SELECT';

export interface ActionRouteBuilderSelect extends Action<string> {
    id: number;
}

export const signalSelect = (id: number): ActionRouteBuilderSelect => {
    return {
        type: ACTION_SIGNAL_SELECT,
        id,
    };
};

export const ACTION_SECTOR_SELECT = 'ACTION_SECTOR_SELECT';
export const sectorSelect = (id: number): ActionRouteBuilderSelect => {
    return {
        type: ACTION_SECTOR_SELECT,
        id,
    };
};


export const ACTION_CLEAR_SELECT = 'ACTION_CLEAR_SELECT';
export const clearSelect = (): Action<string> => {
    return {
        type: ACTION_CLEAR_SELECT,
    };
};

export const findRoute = (dispatch: Dispatch<Action<string>>, startSignalId: number, endSectorId: number) => {
    return dispatch(onSendMessage<Message<RouteFinderRequest>>({
        action: 'find',
        entity: 'route-finder',
        id: 0,
        data: {
            startSignalId,
            endSectorId,
        },
    }));
};
export const buildRoute = (dispatch: Dispatch<Action<string>>, id: number, buildOptions: any) => {
    dispatch(clearSelect());
    return dispatch(onSendMessage({
        action: 'build',
        entity: 'route-builder',
        date: new Date(),
        id: 0,
        data: {
            id,
            buildOptions,
        },
    }));
};

