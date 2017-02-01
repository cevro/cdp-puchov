import {server} from 'websocket';
import {signals} from './data/Signals';
import {obvody} from './data/Obvody';
import {vlakoveCesty} from './data/VlakoveCesty';
let http = require('http');

const handelWebSocketReceive = (data) => {
    switch (data.type) {
        case'signal':
            signals.map((signal) => {
                if (data.name == signal.getName()) {
                    signal.setNavest(data.status);
                }
            });
            break;
        case 'obvod':
            obvody.map((obvod) => {
                if (data.name == obvod.getName()) {
                    obvod.changeStatus(data.status);
                }
            });
            break;
        case'cesta':
            vlakoveCesty.map((cesta) => {
                if (data.name == cesta.getName()) {
                    if (data.act == 'build') {
                        cesta.build();
                    } else if (data.act == 'hard_down') {
                        cesta.hardDown();
                    }
                }
            });
            break;
        default:
            console.warn('no type match')
    }
};

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
    signals.map((signal) => signal.sendStatus(connection));
    obvody.map((obvod) => obvod.sendStatus(connection));
    vlakoveCesty.map((cesta) => cesta.sendStatus(connection));
    console.log((new Date()) + ' Connection accepted.');

    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            let data = JSON.parse(message.utf8Data);
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

export default wsServer;

