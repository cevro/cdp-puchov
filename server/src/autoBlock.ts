//import serialConnector from './inc/SerialConnector/SerialConnector';
import { logger } from './webSocetServer';
import serialConnector, { SerialMessage } from './inc/SerialConnector/SerialConnector';


class AutoBlock {

    public async run() {
        logger.run();
        serialConnector.registerListener((msg: SerialMessage) => {
            logger.log({
                action: 'change',
                entity: msg.entity,
                id: msg.id,
                data: {
                    id: msg.id,
                    state: msg.state,
                },
                date: new Date(),
            });
        });

        console.log('run');
    }
}

setTimeout(() => (new AutoBlock()).run(), 2000);
