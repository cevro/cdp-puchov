//import serialConnector from './inc/SerialConnector/SerialConnector';
import {routeBuilder} from './inc/Factories/RouteBuilder';
import {
    route_1L_L1,
    route_2L_L4,
} from './data/puchov/routes/1L';

class Main {
    private services: Array<Object> = [];

    public async run() {
        // this.registerServices();
        console.log('run');
        setTimeout(() => {

            routeBuilder.addToBuffer(route_1L_L1);
            routeBuilder.addToBuffer(route_2L_L4);
        }, 5000);
    }

    /* private registerServices() {
         this.services = [
             //serialConnector,
             webSocketServer,
             new RouteBuilder(),
             new RoutesFactory(),
             new SignalFactory(),
             new SignalStrategy(),
         ];
     }*/
}

setTimeout(() => (new Main()).run(), 2000);
