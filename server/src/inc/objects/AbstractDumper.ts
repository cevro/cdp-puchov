import { logger } from '../../webSocetServer';
import { MESSAGE_ACTION_STATE_UPDATE } from '../../definitions/interfaces';

export default class AbstractDumper<T = any> {

    public sendState() {
        logger.log<T>({
            action: MESSAGE_ACTION_STATE_UPDATE,
            entity: this.getEntityName(),
            data: this.dumpData(),
            id: this.getLocoNetId(),
            date: new Date(),
        });
    }

    abstract dumpData(): T;

    abstract getLocoNetId(): number;

    abstract getEntityName(): string;
}
