import {
    LocoNetMessage,
    LocoNetReceiver,
    MessageReciever,
} from '../../Factories/DateReceiver';
import {
    ABDir,
    Message,
} from '../../../../../definitions/interfaces';
import {locoNetConnector} from '../../SerialConnector/SerialConnector';
import AbstractDumper from '../AbstractDumper';

export const BANALIZERD_AB_ENTITY_NAME = 'bi-dir-AB';

export interface ABState {
    dir: ABDir;
    locoNetId: number;
}

export default class BiDirAB extends AbstractDumper<ABState> implements MessageReciever, LocoNetReceiver {
    private dir: ABDir;
    private readonly locoNetId;

    constructor(data: { locoNetId: number }) {
        super();
        this.locoNetId = data.locoNetId;
        this.dir = 0;
    }

    public handleMessageReceive(message: Message): void {
        switch (message.action) {
            case 'change-dir':
                return locoNetConnector.send({
                    locoNetId: this.locoNetId,
                    type: 'd',
                    value: message.data.dir,
                });
        }
    }

    public handleLocoNetReceive(data: LocoNetMessage): void {
        switch (data.type) {
            case 'd':
                this.dir = (<ABDir>data.value);
                this.sendState();
                return;
        }
        return;
    }

    public getDir(): ABDir {
        return this.dir;
    }

    public getLocoNetId(): number {
        return this.locoNetId;
    }

    public getEntityName(): string {
        return BANALIZERD_AB_ENTITY_NAME;
    }

    public dumpData(): ABState {
        return {
            dir: this.dir,
            locoNetId: this.locoNetId,
        }
    }
}
