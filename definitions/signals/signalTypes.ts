export const signalTypes = new class {
    public readonly TYPE_ENTRY = 1;
    public readonly TYPE_EXIT = 2;
    public readonly TYPE_PATH = 3;
    public readonly TYPE_SHUNT = 4;
    public readonly TYPE_AB = 5;

    public getAllTypes(): number[] {
        return [this.TYPE_ENTRY, this.TYPE_EXIT, this.TYPE_PATH, this.TYPE_SHUNT, this.TYPE_AB];
    }

    public getLabel(type: number): string {
        switch (type) {
            case this.TYPE_ENTRY:
                return 'entry';
            case this.TYPE_EXIT:
                return 'exit';
            case this.TYPE_PATH:
                return 'path';
            case this.TYPE_SHUNT:
                return 'shunt';
            case this.TYPE_AB:
                return 'AB';
            default:
                throw new Error();
        }
    }
};