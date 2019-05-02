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

export const app = combineReducers({
    messages,
    signals,
    routes,
    sectors,
    routeBuilder,
    signalsContextMenu,
});

export interface Store {
    signals: SignalsState,

    [key: string]: any;
}
