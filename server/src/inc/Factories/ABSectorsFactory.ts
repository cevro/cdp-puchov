import ABSector from '../objects/AB/ABSector';
import {autoBlockSectors} from '@definitions/AutoBlockSectors';
import LocoNetObjectsFactory from './LocoNetObjectsFactory';
import LocoNetObject from '../objects/LocoNetObject';
import {ABSectorMessages} from '@definitions/messages/ABSector';

class ABSectorsFactory extends LocoNetObjectsFactory<ABSectorMessages.ClientToServerMessages, ABSectorMessages.StateUpdateData> {
    private readonly ABSectors: ABSector[];

    constructor() {
        super();
        this.ABSectors = autoBlockSectors.map((value) => {
            return new ABSector(value);
        });
    }

    protected getObjects(): LocoNetObject<ABSectorMessages.ClientToServerMessages, ABSectorMessages.StateUpdateData>[] {
        return this.ABSectors;
    }
}

export const autoBlockSectorFactory = new ABSectorsFactory();
