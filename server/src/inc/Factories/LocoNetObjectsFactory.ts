import {
    LocoNetMessage,
    LocoNetReceiver,
    MessageReceiver,
} from './DateReceiver';
import {Message} from '@definitions/messages';
import LocoNetObject from '../objects/LocoNetObject';

abstract class LocoNetObjectsFactory<M extends Message<any>, D = any> implements MessageReceiver<M>, LocoNetReceiver {

    protected abstract getObjects(): LocoNetObject<M, D>[];

    public handleMessageReceive(message: M): void {
        this.getObjects().forEach((object) => {
            if (this.matchMessage(message, object)) {
                object.handleMessageReceive(message);
            }
        });
    }

    protected matchMessage(message: M, object: LocoNetObject<M, D>): boolean {
        if (object.getLocoNetId() === message.id) {
            if (object.getEntityName() === message.entity) {
                return true;
            }
        }
        return false;
    }

    public handleLocoNetReceive(message: LocoNetMessage): void {
        this.getObjects().forEach((object) => {
            if (object.getLocoNetId() === message.locoNetId) {
                object.handleLocoNetReceive(message);
            }
        });
    }

    public dump(): D[] {
        return this.getObjects().map((object) => {
            return object.dumpData();
        });
    }

}

export default LocoNetObjectsFactory;