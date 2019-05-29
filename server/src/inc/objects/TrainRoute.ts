import Signal from './Signal';
import PointPosition from './PointPosition';
import Sector from './Sector';
import { signalFactory } from '../Factories/SignalFactory';
import { sectorFactory } from '../Factories/SectorsFactory';

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
            return sectorFactory.findById(id);
        });

        this.name = name;
        this.pointPositions = pointPositions;

        this.endSignal = signalFactory.findById(endSignalId);

        this.startSignal = signalFactory.findById(startSignalId);

        this.endSector = sectorFactory.findById(endSectorId);
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
