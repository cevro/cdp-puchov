import {
    connection,
    server,
} from 'websocket';
import {Message} from '@definitions/messages';
import {routeBuilder} from './inc/Factories/RouteBuilder';
import {turnoutsFactory} from './inc/Factories/TurnoutsFactory';
import {signalFactory} from './inc/Factories/SignalsFactory';
import {sectorFactory} from './inc/Factories/SectorsFactory';
import {
    DumpData,
    MESSAGE_ACTION_DUMP,
} from '@definitions/interfaces';
import {MessageReceiver} from './inc/Factories/DateReceiver';
import {routesFactory} from './inc/Factories/RoutesFactory';
import {autoBlockSectorFactory} from './inc/Factories/ABSectorsFactory';
import {biDirAutoBlockFactory} from './inc/Factories/BiDirABsFactory';

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
        action: MESSAGE_ACTION_DUMP,
        data: {
            signals: signalFactory.dump(),
            sectors: sectorFactory.dump(),
            points: turnoutsFactory.dump(),
            routeBuilder: routeBuilder.dumpBuffer(),
            ABSectors: autoBlockSectorFactory.dump(),
            biDirABs: biDirAutoBlockFactory.dump(),
        },
        id: 0,
    };
    connection.send(JSON.stringify(message));
};

export const logger = new class {
    private wsServer: server;
    private dataReceivers: MessageReceiver<Message<any>>[] = [
        routesFactory,
        routeBuilder,
        turnoutsFactory,
        sectorFactory,
        autoBlockSectorFactory,
        biDirAutoBlockFactory,
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

    public log<T extends Message<any>>(message: T) {
        this.wsServer.broadcast(JSON.stringify(message));
        // console.log('[' + message.date.toISOString() + ']: ' + JSON.stringify(message));
    }
};
