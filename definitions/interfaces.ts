import {
    pointPosition,
    requestedPointPosition,
} from './Points';

export interface Message<T = any> {
    entity: string;
    action: string;
    date: Date;
    id: number;
    data: T;
}

export interface TrainRouteDump {
    buffer: TrainRouteBufferItem[];
    hasError: boolean;
    locked: boolean;
}

export interface TrainRouteBufferItem {
    id: number;
    state: string;
    name: string;
    reason: string;
    buildOptions: BuildOptions;
}

export interface PointState {
    id: number;
    position: pointPosition;
    requestedPosition: requestedPointPosition;
    locked: number[];
    changing: boolean;
}

export interface SectorState {
    id: number;
    state: number;
    locked: number[];
}

export interface SignalState {
    id: number;
    state: number;
}

export interface BuildOptions {
    PN: boolean;
    40: boolean;
    alert: boolean;
}

export interface DumpData {
    sectors: SectorState[];
    signals: SignalState[];
    points: PointState[];
    routeBuilder: TrainRouteDump;
}

export interface RouteFinderRequest {
    startSignalId: number;
    endSectorId: number;
}

export const MESSAGE_ACTION_STATE_UPDATE = 'state-update';
export const MESSAGE_ACTION_DUMP = 'dump';


export const MESSAGE_ACTION_MESSAGE = 'message';

