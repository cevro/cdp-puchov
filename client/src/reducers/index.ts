import {combineReducers} from 'redux';
import {messages} from './messages';
import {
    ObjectState,
    objectState,
} from './objectState';
import {
    routeBuilder,
    State as RouteBuilderState,
} from './routeBuilder';
import {
    signalContextMenu,
    State as SignalContextState,
} from './signalContextMenu';
import {
    displayOptions,
    displayOptionsState,
} from './displayOptions';
import {
    State as WebSocketState,
    webSocket,
} from './webSocketBuffer';

export const app = combineReducers({
    messages,
    webSocket,
    objectState,
    routeBuilder,
    signalContextMenu,
    displayOptions,
});

export interface Store {
    displayOptions: displayOptionsState;
    objectState: ObjectState;
    webSocket: WebSocketState;
    signalContextMenu: SignalContextState
    routeBuilder: RouteBuilderState;
    messages: any[];
}
