import { SectorDefinition } from '../../definitions/Sectors';
import { logger } from '../../webSocetServer';
import { STATUS_IN_VC } from '../../consts/obvod/status';
import { MESSAGE_ACTION_STATE_UPDATE } from '../../definitions/interfaces';

export default class Sector {
    private readonly id;

    constructor(definition: SectorDefinition) {
        this.id = definition.id;
    }

    public lock(id: number) {
        logger.log({
            action: MESSAGE_ACTION_STATE_UPDATE,
            entity: 'sector',
            data: {
                state: STATUS_IN_VC,
            },
            id: this.id,
            date: new Date(),
        });
    }
}




