import ABSector from '../objects/AB/ABSector';
import {ABSectors} from '@definitions/ABSectors/ABSectors';
import LocoNetObjectsFactory from './LocoNetObjectsFactory';
import LocoNetObject from '../objects/LocoNetObject';
import {ABSectorMessages} from '@definitions/messages/ABSector';
import {LocoNetDefinition} from '@definitions/interfaces';

class ABSectorsFactory extends LocoNetObjectsFactory<ABSectorMessages.ClientToServerMessages, ABSectorMessages.StateUpdateData> {
    private readonly ABSectors: ABSector[];

    constructor() {
        super();
        this.ABSectors = ABSectors.map((value: LocoNetDefinition) => {
            return new ABSector(value);
        });
    }

    protected getObjects(): LocoNetObject<ABSectorMessages.ClientToServerMessages, ABSectorMessages.StateUpdateData>[] {
        return this.ABSectors;
    }
}

export const autoBlockSectorFactory = new ABSectorsFactory();
