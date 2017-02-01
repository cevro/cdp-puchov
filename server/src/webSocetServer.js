"use strict";
var websocket_1 = require('websocket');
var Signals_1 = require('./data/Signals');
var Obvody_1 = require('./data/Obvody');
var VlakoveCesty_1 = require('./data/VlakoveCesty');
var http = require('http');
var handelWebSocketReceive = function (data) {
    switch (data.type) {
        case 'signal':
            Signals_1.signals.map(function (signal) {
                if (data.name == signal.getName()) {
                    signal.setNavest(data.status);
                }
            });
            break;
        case 'obvod':
            Obvody_1.obvody.map(function (obvod) {
                if (data.name == obvod.getName()) {
                    obvod.changeStatus(data.status);
                }
            });
            break;
        case 'cesta':
            VlakoveCesty_1.vlakoveCesty.map(function (cesta) {
                if (data.name == cesta.getName()) {
                    if (data.act == 'build') {
                        cesta.build();
                    }
                }
            });
            break;
        default:
            console.warn('no type match');
    }
};
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
    Obvody_1.obvody.map(function (obvod) { return obvod.sendStatus(connection); });
    VlakoveCesty_1.vlakoveCesty.map(function (cesta) { return cesta.sendStatus(connection); });
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            var data = JSON.parse(message.utf8Data);
            handelWebSocketReceive(data);
        }
        else if (message.type === 'binary') {
            console.error('Received Binary Message of ' + message.binaryData.length + ' bytes');
        }
    });
    connection.on('close', function (reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = wsServer;
