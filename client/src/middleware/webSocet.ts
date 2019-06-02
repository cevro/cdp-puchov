export interface PointsStateUpdate extends StateUpdate {
    locked: boolean;
}

export interface StateUpdate {
    id: number;
    state: number;
}
