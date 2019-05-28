import {
    connection,
    server,
} from 'websocket';
import { Message } from '../../definitions/interfaces';
import { routeBuilder } from './inc/Factories/RouteBuilder';
import { PointFactory } from './inc/Factories/PointFactory';
import { SignalFactory } from './inc/Factories/SignalFactory';

const http = require('http');

const httpServer = http.createServer((request, response) => {
    // console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});

httpServer.listen(8081, () => {
    //console.log((new Date()) + ' Server is listening on port 8081');
});
const initClient = (connection: connection) => {
    routeBuilder.printBufferSingle(connection);
    PointFactory.dump(connection);
    SignalFactory.dump(connection);
};

const wsServer = new server({
    httpServer: httpServer,
    autoAcceptConnections: false,
});
wsServer.on('request', (request) => {

    const connection = request.accept('echo-protocol', request.origin);
    initClient(connection);

    connection.on('message', (message) => {
        if (message.type === 'utf8') {
            const data = JSON.parse(message.utf8Data);
            console.log(data);
            //handelWebSocketReceive(data, connection);
        }

    });
    connection.on('close', (reasonCode, description) => {
    });
});

export default wsServer;

export const logger = new class {
    public log(message: Message) {
        wsServer.broadcast(JSON.stringify(message));
        console.log('[' + message.date.toISOString() + ']: ' + JSON.stringify(message));
    }

    public logSingle(message: Message, connection: connection) {
        connection.send(JSON.stringify(message));
        console.log('[' + message.date.toISOString() + ']: ' + JSON.stringify(message));
    }
};
