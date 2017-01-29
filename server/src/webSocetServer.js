"use strict";
var websocket_1 = require('websocket');
var L1_1 = require('./data/signals/L1');
var Signals_1 = require('./data/Signals');
var http = require('http');
exports.clients = [];
var httpServer = http.createServer(function (request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
httpServer.listen(8081, function () {
    console.log((new Date()) + ' Server is listening on port 8081');
});
var originIsAllowed = function (origin) {
    return true;
};
var wsServer = new websocket_1.server({
    httpServer: httpServer,
    autoAcceptConnections: false
});
wsServer.on('request', function (request) {
    //console.log(request);
    if (!originIsAllowed(request.origin)) {
        // Make sure we only accept requests from an allowed origin
        request.reject();
        console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
        return;
    }
    var connection = request.accept('echo-protocol', request.origin);
    Signals_1.signals.map(function (signal) { return signal.sendStatus(connection); });
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            L1_1.default.setNavest(+message.utf8Data);
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', function (reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = wsServer;
