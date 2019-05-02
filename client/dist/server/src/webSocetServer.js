"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var websocket_1 = require("websocket");
var index_1 = require("./inc/client-response/index");
var http = require('http');
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
    index_1.initClientData(connection);
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            var data = JSON.parse(message.utf8Data);
            index_1.handelWebSocketReceive(data);
        }
        else if (message.type === 'binary') {
            console.error('Received Binary Message of ' + message.binaryData.length + ' bytes');
        }
    });
    connection.on('close', function (reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});
exports.default = wsServer;
//# sourceMappingURL=webSocetServer.js.map