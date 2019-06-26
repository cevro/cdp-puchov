import Point from '../objects/Point';
import { pointPosition } from '../../definitions/Points';

export class PointLockedError extends Error {
    constructor(point: Point, position: pointPosition) {
        super();
        this.message = 'Cannot get requested position(' + point.id + (position == 1 ? '+' : '-') + ') for locking.';
    }
}

export class PointPositionChangeError extends Error {
    constructor(point: Point, position: pointPosition) {
        super();
        this.message = 'Cannot change position(' + point.id + (position == 1 ? '+' : '-') + ') because is already locked by another route.';
    }
}

export class PointPositionChangingError extends Error {
    constructor(point: Point, position: pointPosition) {
        super();
        this.message = 'Error during changing position(' + point.id + (position == 1 ? '+' : '-') + ').';
    }
}
