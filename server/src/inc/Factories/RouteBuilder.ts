import TrainRoute from '../objects/TrainRoute';

export default class RouteBuilder {

    public async build(trainRoute: TrainRoute) {
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

    }

    public rollBack(trainRoute: TrainRoute) {
    }
}
