import Point from '../objects/Point';
import { pointPosition } from '../../definitions/Points';

export class PointLockedError extends Error {
    constructor(point: Point, position: pointPosition) {
        super();
        this.message = 'Cannot get requested position(' + point.id + (position == 1 ? '+' : '-') + ') for locking';
    }
}
