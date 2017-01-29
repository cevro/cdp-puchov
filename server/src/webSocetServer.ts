import {server} from 'websocket';
import signalL1 from './data/signals/L1';
import {signals} from './data/Signals';
let http = require('http');

export const clients = [];


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
    signals.map((signal)=>signal.sendStatus(connection));

    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            signalL1.setNavest(+message.utf8Data);
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

export default wsServer;

