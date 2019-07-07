import {
    LocoNetMessage,
    LocoNetReciever,
    MessageReciever,
} from '../Factories/DateReceiver';
import { Message } from '../../definitions/interfaces';
import { locoNetConnector } from '../SerialConnector/SerialConnector';
import AbstractDumper from './AbstractDumper';

export const BANALIZERD_AB_ENTITY_NAME = 'banalized-auto-block';
export default class BanalizedAutoBlock extends AbstractDumper<{ dir: -1 | 0 | 1; locoNetId: number }> implements MessageReciever, LocoNetReciever {
    private dir;
    private readonly locoNetId;

    constructor(data: { locoNetId: number }) {
        super();
        this.locoNetId = data.locoNetId;
        this.dir = 0;
    }

    public handleMessageReceive(message: Message) {
        switch (message.action) {
            case 'change-dir':
                return locoNetConnector.send({
                    locoNetId: this.locoNetId,
                    type: 'd',
                    value: message.data.dir,
                });
        }
    }

    public handleLocoNetReceive(data: LocoNetMessage) {
        switch (data.type) {
            case 'd':
                this.dir = data.value;
                this.sendState();
                return;
        }
    }

    public getLocoNetId() {
        return this.locoNetId;
    }

    public getEntityName() {
        return BANALIZERD_AB_ENTITY_NAME;
    }

    public dumpData() {
        return {
            dir: this.dir,
            locoNetId: this.locoNetId,
        }
    }
}
