import BanalizedAutoBlock from './BanalizedAutoBlock';
import { ABRequestedDir } from '../../definitions/interfaces';

export default class TrackApproval {

    private readonly locoNetId: number;
    private AB: BanalizedAutoBlock;
    private readonly dir: ABRequestedDir;
    private locked: boolean;

    constructor(id: number, ADId: number, dir: ABRequestedDir) {
        this.locoNetId = id;
        this.dir = dir;
        this.locked = false;
    }

    check() {
        if (this.AB.getDir() !== this.dir) {
            throw Error('AutoBlock knot');
        }
    }


}
