import { pointPosition } from './Points';

export interface Message<T = any> {
    entity: string;
    action: string;
    date: Date;
    id: number;
    data: T;
}

export interface TrainRouteBufferItem {
    id: number,
    state: string,
    name: string,
}

export interface PointState {
    id: number;
    state: pointPosition;
    locked: boolean;
}

export interface SectorState {
    id: number;
    state: number;
    locked: true;
}

export interface SignalState {
    id: number;
    state: number;
}

export interface DumpData {
    sectors: SectorState[];
    signals: SignalState[];
    points: PointState[];
}

export const MESSAGE_ACTION_STATE_UPDATE = 'state-update';
export const MESSAGE_ACTION_DUMP = 'dump';


export const MESSAGE_ACTION_MESSAGE = 'message';

