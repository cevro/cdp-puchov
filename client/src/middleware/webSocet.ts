import { onSendMessage } from '../actions/webSocets';

const url = 'ws://' + window.location.hostname + ':8081/';

export const ws = new WebSocket(url, 'echo-protocol');

export async function sendMessage(dispatch: Function, data) {
    const text = JSON.stringify(data);
    ws.send(text);
    return dispatch(onSendMessage(text));
}
