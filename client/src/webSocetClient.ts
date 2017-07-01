const url = 'ws://' + window.location.hostname + ':8081/';

export const ws = new WebSocket(url, 'echo-protocol');