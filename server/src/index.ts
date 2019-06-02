//import serialConnector from './inc/SerialConnector/SerialConnector';
import wsServer from './webSocetServer';

class Main {

    public async run() {
        wsServer;
        console.log('run');
        setTimeout(() => {
        }, 5000);
    }
}

setTimeout(() => (new Main()).run(), 2000);
