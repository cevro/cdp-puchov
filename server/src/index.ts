//import serialConnector from './inc/SerialConnector/SerialConnector';
import { logger } from './webSocetServer';

class Main {

    public async run() {
        logger.run();
        console.log('run');
    }
}

setTimeout(() => (new Main()).run(), 2000);
