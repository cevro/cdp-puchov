import {
    LocoNetMessage,
    LocoNetReceiver,
    MessageReceiver,
} from '../Factories/DateReceiver';
import {Message} from '@definitions/messages';
import {logger} from '@app/webSocetServer';

abstract class LocoNetObject<M extends Message<any>, D> implements LocoNetReceiver, MessageReceiver<M> {

    protected readonly locoNetId: number;

    protected constructor(locoNetId: number) {
        this.locoNetId = locoNetId;
    }

    public getLocoNetId(): number {
        return this.locoNetId;
    }

    public sendState() {
        logger.log<Message<D, string, 'state-update'>>({
            action: 'state-update',
            entity: this.getEntityName(),
            data: this.dumpData(),
            id: this.getLocoNetId(),
        });
    }

    public abstract handleLocoNetReceive(message: LocoNetMessage): void;

    public abstract handleMessageReceive(message: M): void;

    public abstract getEntityName(): string;

    public abstract dumpData(): D;
}

export default LocoNetObject;