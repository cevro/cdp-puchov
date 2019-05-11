import { combineReducers } from 'redux';
import { messages } from './messages';
import {
    signals,
    SignalsState,
} from './signals';
import { routes } from './routes';
import { sectors } from './sectors';
import { routeBuilder } from './route-builder';
import { signalsContextMenu } from './signal-context-menu';
import {
    displayOptions,
    displayOptionsState,
} from './displayOptions';

export const app = combineReducers({
    messages,
    signals,
    routes,
    sectors,
    routeBuilder,
    signalsContextMenu,
    displayOptions,
});

export interface Store {
    signals: SignalsState,
    displayOptions: displayOptionsState,

    [key: string]: any;
}
