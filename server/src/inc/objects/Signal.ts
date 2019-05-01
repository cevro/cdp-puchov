export default class Signal {
    public id;

    public name;

    public type;

    //public lockedBy = null;

    /**
     *
     * @param id
     * @param name
     * @param type
     */
    constructor(id: number, name: string, type: number) {
        this.id = id;
        this.name = name;
        this.type = type;
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
