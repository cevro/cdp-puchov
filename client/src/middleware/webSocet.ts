import { onSendMessage } from '../actions/webSocets';
import { ws } from '../webSocetClient';

export function sendMessage(dispatch: Function, data) {
    const text = JSON.stringify(data);
    ws.send(text);
    return dispatch(onSendMessage(text));
}

export interface PointsStateUpdate extends StateUpdate {
    locked: boolean;
}

export interface StateUpdate {
    id: number;
    state: number;
}
