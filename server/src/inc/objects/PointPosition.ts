import Point from './Point';
import TrainRoute from './TrainRoute';

export default class PointPosition {
    private readonly position: 1 | -1;
    private readonly point: Point;

    constructor(point: Point, position: 1 | -1) {
        this.point = point;
        this.position = position;
    };

    public async lock(trainRoute: TrainRoute) {
        return this.point.lock(trainRoute, this.position);
    }
}
