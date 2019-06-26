import { points } from '../../definitions/Points';
import Point from '../objects/Point';
import {
    Message,
    PointState,
} from '../../definitions/interfaces';
import { DataRecierver } from './DateReceiver';

class PointsFactory implements DataRecierver {

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

    public dataReceive(message: Message): void {
        if (message.entity !== 'point') {
            return;
        }

        switch (message.action) {
            case 'set-position':
                return this.handleSetPosition(message);
        }
        const {data} = message;
        const point = this.findById(data.id);
        try {
            point.changePosition(data.state);
        } catch (e) {
            //logger.log()
        }
    }

    private handleSetPosition(message: Message) {
        const {data} = message;
        const point = this.findById(data.id);
        point.changePosition(data.state);
    }

}

export const pointFactory = new PointsFactory();
