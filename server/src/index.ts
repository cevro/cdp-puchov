import serialConnector from './inc/SerialConnector/SerialConnector';
import webSocketServer from './webSocetServer';
import RouteBuilder from './inc/Factories/RouteBuilder';
import RoutesFactory from './inc/Factories/RoutesFactory';
import SignalFactory from './inc/Factories/SignalFactory';
import SignalStrategy from './inc/Factories/SignalStrategy';

class Main {
    private services: Array<Object> = [];

    public async run() {
        this.registerServices();

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

            index++;
            if (index > 16) {
                index = 0;
            }
        }, 4000);
        // }

    }

    private registerServices() {
        this.services = [
            serialConnector,
            webSocketServer,
            new RouteBuilder(),
            new RoutesFactory(),
            new SignalFactory(),
            new SignalStrategy(),
        ];
    }
}

setTimeout(() => (new Main()).run(), 2000);
