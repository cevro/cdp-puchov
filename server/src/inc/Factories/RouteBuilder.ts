import TrainRoute from '../objects/TrainRoute';

export default class RouteBuilder {
    private locked: boolean = false;

    private buffer: TrainRoute[] = [];

    private addToBuffer(trainRoute: TrainRoute) {
        this.buffer.push(trainRoute);
        this.build();
    }

    //private printBuffer();

    private async build(): Promise<void> {
        if (this.locked) {
            return;
        }
        if (!this.buffer.length) {
            return;
        }
        const trainRoute = this.buffer.shift();
        this.locked = true;
        const sectors = trainRoute.getSectors();
        const pointPositions = trainRoute.getPointPositions();
        try {
            for (const id in sectors) {
                const sector = sectors[id];
                sector.alock();
            }
            for (const id in pointPositions) {
                const pointPosition = pointPositions[id];
                await pointPosition.lock(trainRoute);
            }

        }
        catch (e) {
            this.rollBack(trainRoute);
        }
        this.locked = false;
        this.build();
    }

    public rollBack(trainRoute: TrainRoute) {
    }

}
