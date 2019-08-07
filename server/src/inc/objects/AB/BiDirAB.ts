import {LocoNetMessage} from '../../Factories/DateReceiver';
import {ABDir} from '@definitions/interfaces';
import {locoNetConnector} from '../../SerialConnector/SerialConnector';
import {Message} from '@definitions/messages';
import {ENTITY_BI_DIR_AB} from '@definitions/entity';
import LocoNetObject from '../LocoNetObject';

export interface ABState {
    dir: ABDir;
    locoNetId: number;
}

export default class BiDirAB extends LocoNetObject<Message<any>, ABState> {
    private dir: ABDir;

    constructor(data: { locoNetId: number }) {
        super(data.locoNetId);
        this.dir = 0;
    }

    public getDir(): ABDir {
        return this.dir;
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

    public getEntityName(): string {
        return ENTITY_BI_DIR_AB;
    }

    public dumpData(): ABState {
        return {
            dir: this.dir,
            locoNetId: this.locoNetId,
        }
    }
}
