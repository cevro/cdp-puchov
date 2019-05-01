import TrainRoute from './TrainRoute';

export default class Point {

    private position: 1 | 0 | -1 = 0;
    private lockedBy: number[] = [];

    public async lock(trainRoute: TrainRoute, position: 1 | -1) {
        if (this.position != position) {
            await this.changePosition(position);
        }
        this.lockedBy.push(trainRoute.id);
    }

    public async changePosition(position: 1 | -1) {
        if (this.lockedBy.length > 0) {
            throw new Error();
        }

    }
}
