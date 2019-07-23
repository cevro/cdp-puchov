import BanalizedAutoBlock from '../AB/BiDirAB';
import {
    ABRequestedDir,
} from '../../../../../definitions/interfaces';
import AbstractDumper from '../AbstractDumper';
import {
    LocoNetMessage,
    LocoNetReceiver,
    MessageReciever,
} from '../../Factories/DateReceiver';
import { locoNetConnector } from '../../SerialConnector/SerialConnector';
import {Message} from '../../../../../definitions/messages';

export default class TrackApproval extends AbstractDumper<any> implements LocoNetReceiver, MessageReciever {

    private readonly locoNetId: number;
    private AB: BanalizedAutoBlock;
    private readonly dir: ABRequestedDir;
    private locked: boolean;
    private readonly ABId: number;

    constructor(id: number, ABId: number, dir: ABRequestedDir) {
        super();
        this.locoNetId = id;
        this.dir = dir;
        this.ABId = ABId;
        this.locked = false;
    }

    check(): void {
        if (this.AB.getDir() !== this.dir) {
            throw Error('AutoBlock on oposite direction');
        }
    }

    handleLocoNetReceive(data: LocoNetMessage) {
        switch (data.type) {
            case 'l':
                this.locked = true;
        }
    }

    handleMessageReceive(message: Message) {
        if (message.id !== this.locoNetId) {
            return;
        }

        switch (message.action) {
            case 'unlock':
                locoNetConnector.send({
                    locoNetId: this.ABId,
                    type: 'l',
                    value: 0,
                });
                break;
            case 'lock':
                locoNetConnector.send({
                    locoNetId: this.ABId,
                    type: 'l',
                    value: 1,
                });
                break;
        }
    }

    public lock(id: number) {
        this.locked = true;
        this.sendState();
    }

    public unlock(id: number) {
        if (this.locked) {
            this.locked = false;
        }
    }

    getEntityName() {
return '';
    }

    getLocoNetId() {
        return this.locoNetId;
    }

    dumpData() {
        return {};
    }

}
