import {
    LocoNetMessage,
    LocoNetReceiver,
    MessageReciever,
} from './DateReceiver';
import {
    AutoBlockSectorState,
    Message,
} from '../../definitions/interfaces';
import ABSector from '../objects/AB/ABSector';
import {autoBlockSectors} from '../../definitions/AutoBlockSectors';
import {ENTITY_AB_SECTOR} from "../../definitions/consts";

class ABSectorsFactory implements MessageReciever, LocoNetReceiver {
    private readonly ABSectors: ABSector[];

    constructor() {
        this.ABSectors = autoBlockSectors.map((value) => {
            return new ABSector(value);
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
        if (message.entity !== ENTITY_AB_SECTOR) {
            return;
        }
        this.ABSectors.forEach((ABSector) => {
            if (ABSector.locoNetId == message.id) {
                ABSector.handleMessageReceive(message);
            }
        });
    }
}

export const autoBlockSectorFactory = new ABSectorsFactory();
