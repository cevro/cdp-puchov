import { sectors } from '../../definitions/Sectors';
import Sector from '../objects/Sector';
import { Message } from '../../../../definitions/interfaces';
import { DataRecierver } from './DateReceiver';

class SectorsFactory implements DataRecierver {

    private readonly sectors: Sector[];

    constructor() {
        this.sectors = sectors.map((value => {
            return new Sector(value);
        }));
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

    public dataReceive(message: Message): void {
        if (message.entity !== 'sector') {
            return;
        }
        const {data} = message;
        const sector = this.findById(data.id);
        sector.state = data.state;
    }
}

export const sectorFactory = new SectorsFactory();
