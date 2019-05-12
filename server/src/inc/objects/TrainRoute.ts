import Signal from './Signal';
import PointPosition from './PointPosition';
import Sector from './Sector';

export default class TrainRoute {
    public id;

    private readonly sectors: Sector[];
    private readonly pointPositions: PointPosition[];
    private readonly startSignal: Signal;
    private readonly endSector: Sector;
    private readonly speed: number | null;

    constructor(name: string, sectors: Sector[], pointPositions: PointPosition[], startSignal: Signal, endSector: Sector, speed: number | null) {
        this.sectors = sectors;
        this.pointPositions = pointPositions;
        this.startSignal = startSignal;
        this.endSector = endSector;
        this.speed = speed;
    }

    public getSectors(): Sector[] {
        return this.sectors;
    };

    public getPointPositions(): PointPosition[] {
        return this.pointPositions;
    }

    public alock() {
    }
}
