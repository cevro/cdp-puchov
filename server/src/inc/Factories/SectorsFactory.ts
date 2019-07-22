import Sector from '../objects/Sectors/Sector';
import { Message } from '../../definitions/messages';
import {
    LocoNetMessage,
    LocoNetReceiver,
    MessageReciever,
} from './DateReceiver';
import { sectors } from '../../data/sectors';

class SectorsFactory implements MessageReciever, LocoNetReceiver {

    private readonly sectors: Sector[];

    constructor() {

        this.sectors = sectors.map(value => {
            return new Sector(value);
        });
    }

    public findById(id: number): Sector {
        for (const index in this.sectors) {
            if (this.sectors.hasOwnProperty(index)) {
                if (this.sectors[index].id === id) {
                    return this.sectors[index];
                }
            }
        }
        throw new Error();
    }

    public dump() {
        return this.sectors.map((sector) => {
            return sector.dumpData();
        });
    }

    public handleLocoNetReceive(data: LocoNetMessage) {
        this.sectors.forEach((sector) => {
            if (sector.id == data.locoNetId) {
                sector.handleLocoNetReceive(data);
            }
        });
    }

    public handleMessageReceive(message: Message): void {
        if (message.entity !== 'sector') {
            return;
        }
        this.sectors.forEach((sector) => {
            if (sector.id == message.id) {
                sector.handleMessageReceive(message);
            }
        });
    }
}

export const sectorFactory = new SectorsFactory();
