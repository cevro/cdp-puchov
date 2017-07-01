import Sector from './sector';
import {
    STATUS_BUSY,
    STATUS_FREE,
    STATUS_IN_VC,
} from '../../../consts/obvod/status';

export default class SectorsGroup {
    protected sectors: Array<Sector>;

    constructor(sectors: Array<Sector>) {
        this.sectors = sectors;
    }

    public isFree(): boolean {
        return this.sectors.every((sector) => {
            return sector.getStatus() === STATUS_FREE;
        });
    }

    public lock(): void {
        this.sectors.forEach((sector) => {
            sector.lock();
        });
    }

    public unlock(): void {
        this.sectors.forEach((obvod) => {
            obvod.unlock();
        });
    }

    public isReserved(): boolean {
        return this.sectors.every((sector) => {
            return sector.getStatus() === STATUS_IN_VC;
        });
    }

    public allocate(): void {
        this.sectors.forEach((sector) => {
            sector.changeStatus(STATUS_IN_VC);
        });
    }

    public deallocate(): void {
        this.sectors.forEach((obvod) => {
            obvod.changeStatus(STATUS_FREE);
        });
    }

    public addListeners(callback: Function) {
        this.sectors.forEach((sector) => {
            sector.addListener('SECTOR_CHANGED', () => {
                return callback();
            })
        });
    }
}