import Signal from './Signal';
import PointPosition from './PointPosition';
import Sector from './Sectors/Sector';
import { signalFactory } from '../Factories/SignalFactory';
import { sectorFactory } from '../Factories/SectorsFactory';
import { TrainRouteDefinition } from '../../data/puchov/routes/1L';
import { SignalStrategy } from '../Factories/SignalStrategy';
import { BuildOptions } from '../../definitions/interfaces';

export default class TrainRoute {
    public id;
    public name: string;

    public readonly sectors: Sector[];
    public readonly pointPositions: PointPosition[];
    public startSignal: Signal;
    public endSignal: Signal;
    // public trackApproval: TrackApproval;

    public readonly endSector: Sector;

    public readonly speed: number | null;
    public sufficientDistance: boolean;

    constructor(def: TrainRouteDefinition) {
        this.id = def.id;
        this.sectors = def.sectorIds.map((id) => {
            return sectorFactory.findById(id);
        });

        this.name = def.name;
        this.pointPositions = def.pointPositions;

        this.endSignal = def.endSignalId ? signalFactory.findById(def.endSignalId) : null;

        this.startSignal = signalFactory.findById(def.startSignalId);

        this.endSector = sectorFactory.findById(def.endSectorId);
        this.speed = def.speed;
        this.sufficientDistance = def.sufficientDistance === undefined ? true : def.sufficientDistance;
    }

    public getSectors(): Sector[] {
        return this.sectors;
    };

    public getPointPositions(): PointPosition[] {
        return this.pointPositions;
    }

    public alock() {
    }

    public recalculateSignal(buildOptions: BuildOptions): void {
        this.startSignal.changeState(SignalStrategy.calculate(this.endSignal, this.speed, this.sufficientDistance, buildOptions));
    }

}
