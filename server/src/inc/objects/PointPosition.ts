import Point from './Point';
import { pointFactory } from '../Factories/PointFactory';

export default class PointPosition {
    private readonly position: 1 | -1;
    private readonly point: Point;

    constructor(pointId: number, position: 1 | -1) {
        this.point = pointFactory.findById(pointId);
        this.position = position;
    };

    public async lock(id: number) {
        return this.point.lock(id, this.position);
    }

    public check() {
        return this.point.check(this.position);
    }
}
