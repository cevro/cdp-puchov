import {
    connection,
    server,
} from 'websocket';
import { Message } from '../../definitions/interfaces';
import { routeBuilder } from './inc/Factories/RouteBuilder';
import { pointFactory } from './inc/Factories/PointFactory';
import { signalFactory } from './inc/Factories/SignalFactory';
import { sectorFactory } from './inc/Factories/SectorsFactory';
import {
    DumpData,
    MESSAGE_ACTION_DUMP,
} from './definitions/interfaces';
import { MessageReciever } from './inc/Factories/DateReceiver';
import { routesFactory } from './inc/Factories/RoutesFactory';
import { autoBlockSectorFactory } from './inc/Factories/AutoBlockSectorFactory';
import { banalizedAutoBlockFactory } from './inc/Factories/BanalizedAutoBlockFactory';

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
    const message: Message<DumpData> = {
        entity: '*',
        date: new Date(),
        action: MESSAGE_ACTION_DUMP,
        data: {
            signals: signalFactory.dump(),
            sectors: sectorFactory.dump(),
            points: pointFactory.dump(),
            routeBuilder: routeBuilder.dumpBuffer(),
            autoBlockSectors: autoBlockSectorFactory.dump(),
            banalizedAutoBlocks: banalizedAutoBlockFactory.dump(),
        },
        id: 0,
    };
    connection.send(JSON.stringify(message));
};

export const logger = new class {
    private wsServer: server;
    private dataReceivers: MessageReciever[] = [
        routesFactory,
        routeBuilder,
        pointFactory,
        sectorFactory,
        autoBlockSectorFactory,
        banalizedAutoBlockFactory,
        signalFactory,
    ];

    public run() {
        this.wsServer = new server({
            httpServer: httpServer,
            autoAcceptConnections: false,
        });
        this.wsServer.on('request', (request) => {

            const connection = request.accept('echo-protocol', request.origin);
            initClient(connection);

            connection.on('message', (message) => {
                if (message.type === 'utf8') {
                    const data = JSON.parse(message.utf8Data);
                    this.dataReceivers.forEach((dataReceiver) => {
                        dataReceiver.handleMessageReceive(data);
                    });
                }
            });
            connection.on('close', (reasonCode, description) => {
            });
        });
    }

    public log<T = any>(message: Message<T>) {
        this.wsServer.broadcast(JSON.stringify(message));
        // console.log('[' + message.date.toISOString() + ']: ' + JSON.stringify(message));
    }
};
