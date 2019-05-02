"use strict";
exports.__esModule = true;
var url = 'ws://' + window.location.hostname + ':8081/';
exports.ws = new WebSocket(url, 'echo-protocol');
