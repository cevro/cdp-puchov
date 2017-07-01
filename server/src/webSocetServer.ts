import {server} from 'websocket';
import {
    handelWebSocketReceive,
    initClientData,
} from './inc/client-response/index';
let http = require('http');

let httpServer = http.createServer(function (request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});

httpServer.listen(8081, function () {
    console.log((new Date()) + ' Server is listening on port 8081');
});

const originIsAllowed = (origin) => {
    return true;
};

const wsServer = new server({
    httpServer: httpServer,
    autoAcceptConnections: false
});
wsServer.on('request', (request) => {
    //console.log(request);
    if (!originIsAllowed(request.origin)) {
        // Make sure we only accept requests from an allowed origin
        request.reject();
        console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
        return;
    }

    let connection = request.accept('echo-protocol', request.origin);
    initClientData(connection);

    console.log((new Date()) + ' Connection accepted.');

    connection.on('message', function (message) {

        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            const data = JSON.parse(message.utf8Data);
            handelWebSocketReceive(data,connection);
        }

    });
    connection.on('close', function (reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});

export default wsServer;

