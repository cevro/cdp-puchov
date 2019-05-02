import serialConnector from './inc/SerialConnector/SerialConnector';
import webSocketServer from './webSocetServer';

class Main {
    public async run() {

        // stupid touch
        //wsServer;
        webSocketServer;

        // for (let id = 0; id < 1; id++) {
        let index = 0;
        setInterval(() => {
            serialConnector.write('s:0:' + index);
            webSocketServer.broadcast(JSON.stringify({
                type: 'change',
                entity: 'signal',
                id: 0,
                state: index,
            }));

            serialConnector.write('s:1:' + index);
            webSocketServer.broadcast(JSON.stringify({
                type: 'change',
                entity: 'signal',
                id: 1,
                state: index,
            }));

            serialConnector.write('s:2:' + index);
            webSocketServer.broadcast(JSON.stringify({
                type: 'change',
                entity: 'signal',
                id: 2,
                state: index,
            }));

            serialConnector.write('s:3:' + index);
            webSocketServer.broadcast(JSON.stringify({
                type: 'change',
                entity: 'signal',
                id: 3,
                state: index,
            }));


            index++;
            if (index > 16) {
                index = 0;
            }
        }, 4000);
        // }

    }
}

setTimeout(() => (new Main()).run(), 2000);
