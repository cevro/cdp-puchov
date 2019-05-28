import Signal from './Signal';
import PointPosition from './PointPosition';
import Sector from './Sector';
import { getSectorById } from '../../definitions/Sectors';
import { SignalFactory } from '../Factories/SignalFactory';

export default class TrainRoute {
    public id;
    public name: string;

    public readonly sectors: Sector[];
    public readonly pointPositions: PointPosition[];
    public startSignal: Signal;
    public endSignal: Signal;

    public readonly endSector: Sector;

    public readonly speed: number | null;

    constructor(
        name: string,
        sectorIds: number[],
        pointPositions: PointPosition[],
        startSignalId: number,
        endSignalId: number,
        endSectorId: number,
        speed: number | null,
    ) {
        this.sectors = sectorIds.map((id) => {
            return new Sector(getSectorById(id));
        });

        this.name = name;
        this.pointPositions = pointPositions;

        this.endSignal = SignalFactory.findById(endSignalId);

        this.startSignal = SignalFactory.findById(startSignalId);

        this.endSector = new Sector(getSectorById(endSectorId));
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
