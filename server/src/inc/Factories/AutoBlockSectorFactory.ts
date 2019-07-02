import {
    LocoNetMessage,
    LocoNetReciever,
    MessageReciever,
} from './DateReceiver';
import { Message } from '../../../../definitions/interfaces';
import AutoBlockSector from '../objects/AutoBlockSector';
import { autoBlockSectors } from '../../definitions/AutoBlockSectors';

class AutoBlockSectorFactory implements MessageReciever, LocoNetReciever {
    private readonly ABSectors: AutoBlockSector[];

    constructor() {
        this.ABSectors = autoBlockSectors.map((value) => {
            return new AutoBlockSector(value);
        });
    }

    public handleLocoNetReceive(data: LocoNetMessage) {
        this.ABSectors.forEach((ABSector) => {
            ABSector.handleLocoNetReceive(data)
        });
    }

    public handleMessageReceive(message: Message) {
        if (message.entity !== 'auto-block-sector') {
            return;
        }
        this.ABSectors.forEach((ABSector) => {
            ABSector.handleMessageReceive(message)
        });
    }
}

export const autoBlockSectorFactory = new AutoBlockSectorFactory();
