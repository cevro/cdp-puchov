import {AbstractObject} from '../abstract-object';

import {STATUS_FREE} from '../../../consts/obvod/status';

export const SECTOR_TYPE = 'obvod';

export default class Sector extends AbstractObject {

    constructor({name}) {
        super({name});
        this.type = SECTOR_TYPE;
        this.status = STATUS_FREE;
    }

    registerListener() {
    }

    init() {

    }

    public changeStatus(nextStatus) {
        this.status = +nextStatus;
        this.emit('SECTOR_CHANGED');
        this.sendStatus();
    }
}
