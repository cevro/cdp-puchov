import Signal from './Signal';
import PointPosition from './PointPosition';

export default class TrainRoute {
    public id;

    private readonly sectors: any[];
    private readonly pointPositions: PointPosition[];
    private readonly startSignal: Signal;
    private readonly endSignal: Signal;
    private readonly speed: number | null;

    constructor(sectors: Array<any>, pointPositions: PointPosition[], startSignal: Signal, endSignal: Signal, speed: number | null) {
        this.sectors = sectors;
        this.pointPositions = pointPositions;
        this.startSignal = startSignal;
        this.endSignal = endSignal;
        this.speed = speed;
    }

    public getSectors(): Array<any> {
        return this.sectors;
    };

    public getPointPositions(): PointPosition[] {
        return this.pointPositions;
    }
}
