import { points } from '../../definitions/Points';
import Point from '../objects/Point';
import {
    Message,
    PointState,
} from '../../definitions/interfaces';

export const pointFactory = new class {

    private readonly points: Point[];

    constructor() {
        this.points = points.map((value => {
            return new Point(value);
        }));
    }

    public findById(id: number): Point {
        for (const index in this.points) {
            if (this.points.hasOwnProperty(index)) {
                if (this.points[index].id === id) {
                    return this.points[index];
                }
            }
        }
        throw new Error();
    }

    public dump(): PointState[] {
        return this.points.map((point) => {
            return point.dumpData();
        });
    }

};
