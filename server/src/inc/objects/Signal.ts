export default class Signal {
    public id;
    //public lockedBy = null;

    /**
     *
     * @param id
     * @param name
     * @param type
     */
    constructor(id: number) {
        this.id = id;
    }

    public getState(): number {
        return 1;
    }

    /*
        public lock(trainRoute: TrainRoute) {
            if (this.lockedBy) {
                throw new Error();
            }
            this.lockedBy = trainRoute.id;
        }*/

}
