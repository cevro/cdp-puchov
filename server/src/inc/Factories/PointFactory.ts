import { points } from '../../definitions/Points';
import Point from '../objects/Point';
import { connection } from 'websocket';
import { MESSAGE_ACTION_DUMP } from '../../../../definitions/interfaces';

export const PointFactory = new class {

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

    public dump(connection: connection) {
        const messages = this.points.map((point) => {
            return point.dumpData();
        });
        connection.send(JSON.stringify({
            action: MESSAGE_ACTION_DUMP,
            entity: 'point',
            id: 0,
            date: new Date(),
            data: messages,
        }));
    }

};
