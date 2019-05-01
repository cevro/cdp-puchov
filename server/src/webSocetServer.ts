import { server } from 'websocket';

const http = require('http');

const httpServer = http.createServer(function (request, response) {
    // console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});

httpServer.listen(8081, function () {
    //console.log((new Date()) + ' Server is listening on port 8081');
});

const wsServer = new server({
    httpServer: httpServer,
    autoAcceptConnections: false,
});
wsServer.on('request', (request) => {

    const connection = request.accept('echo-protocol', request.origin);
    //initClient(connection);

    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            const data = JSON.parse(message.utf8Data);
            console.log(data);
            //handelWebSocketReceive(data, connection);
        }

    });
    connection.on('close', function (reasonCode, description) {
    });
});

export default wsServer;
