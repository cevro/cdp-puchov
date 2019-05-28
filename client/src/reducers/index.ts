import { combineReducers } from 'redux';
import { messages } from './messages';
import {
    ObjectState,
    objectState,
} from './objectState';
import { routeBuilder } from './route-builder';
import { signalsContextMenu } from './signal-context-menu';
import {
    displayOptions,
    displayOptionsState,
} from './displayOptions';

export const app = combineReducers({
    messages,
    // routes,
    objectState,
    routeBuilder,
    signalsContextMenu,
    displayOptions,
});

export interface Store {
    displayOptions: displayOptionsState;
    objectState: ObjectState;
}
