import {
    LocoNetMessage,
    LocoNetReciever,
    MessageReciever,
} from './DateReceiver';
import {
    AutoBlockSectorState,
    Message,
} from '../../definitions/interfaces';
import AutoBlockSector from '../objects/Sectors/AutoBlockSector';
import { autoBlockSectors } from '../../definitions/AutoBlockSectors';

class AutoBlockSectorFactory implements MessageReciever, LocoNetReciever {
    private readonly ABSectors: AutoBlockSector[];

    constructor() {
        this.ABSectors = autoBlockSectors.map((value) => {
            return new AutoBlockSector(value);
        });
    }

    public dump(): AutoBlockSectorState[] {
        return this.ABSectors.map((sector) => {
            return sector.dumpData();
        });
    }

    public handleLocoNetReceive(data: LocoNetMessage) {
        this.ABSectors.forEach((ABSector) => {
            if (ABSector.locoNetId == data.locoNetId) {
                ABSector.handleLocoNetReceive(data);
            }
        });
    }

    public handleMessageReceive(message: Message) {
        if (message.entity !== 'auto-block-sector') {
            return;
        }
        this.ABSectors.forEach((ABSector) => {
            if (ABSector.locoNetId == message.id) {
                ABSector.handleMessageReceive(message);
            }
        });
    }
}

export const autoBlockSectorFactory = new AutoBlockSectorFactory();
