export default class Signal {
    public id;
    //public lockedBy = null;

    constructor(id: number) {
        this.id = id;
    }

    public getState(): number {
        return 0;
    }

    /*
        public lock(trainRoute: TrainRoute) {
            if (this.lockedBy) {
                throw new Error();
            }
            this.lockedBy = trainRoute.id;
        }*/

}
