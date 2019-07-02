//import serialConnector from './inc/SerialConnector/SerialConnector';
import { logger } from './webSocetServer';
import { locoNetConnector } from './inc/SerialConnector/SerialConnector';
import { autoBlockSectorFactory } from './inc/Factories/AutoBlockSectorFactory';

class Main {

    public async run() {
        logger.run();
        locoNetConnector.registerListener(autoBlockSectorFactory);
        console.log('run');
    }
}

setTimeout(() => (new Main()).run(), 2000);
