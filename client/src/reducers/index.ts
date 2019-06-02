import { combineReducers } from 'redux';
import { messages } from './messages';
import {
    ObjectState,
    objectState,
} from './objectState';
import {
    routeBuilder,
    State as RouteBuilderState,
} from './routeBuilder';
import { signalsContextMenu } from './signal-context-menu';
import {
    displayOptions,
    displayOptionsState,
} from './displayOptions';
import {
    State as toSendBufferState,
    toSendBuffer,
} from './webSocketBuffer';

export const app = combineReducers({
    messages,
    toSendBuffer,
    // routes,
    objectState,
    routeBuilder,
    signalsContextMenu,
    displayOptions,
});

export interface Store {
    displayOptions: displayOptionsState;
    objectState: ObjectState;
    toSendBuffer: toSendBufferState;
    routeBuilder: RouteBuilderState;
}
