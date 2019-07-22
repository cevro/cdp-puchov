import {TurnoutMessages} from './messages';

export interface LocoNetObjectState {
    locoNetId: number;
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

/**
 * @deprecated use TurnoutMessages.StateUpdateData
 */
export interface TurnoutState extends TurnoutMessages.StateUpdateData {
}

export interface SectorState extends LocoNetObjectState {
    state: number;
    locked: number;
}

export interface SignalState extends LocoNetObjectState {
    displayState: number;
    requestedState: number;
}

export interface ABSectorState extends LocoNetObjectState {
    state: number;
    errorCode: number,
    errorMessage: string,
    active: number,
    fullBlockConditionActive: number;
}

export type ABRequestedDir = -1 | 0 | 1
export type ABDir = ABRequestedDir | 0;

export interface BiDirABState {
    dir: ABDir;
    locoNetId: number;
}

export interface BuildOptions {
    PN: boolean;
    40: boolean;
    alert: boolean;
}

export interface DumpData {
    sectors: SectorState[];
    signals: SignalState[];
    points: TurnoutMessages.StateUpdateData[];
    routeBuilder: TrainRouteDump;
    ABSectors: ABSectorState[];
    biDirABs: BiDirABState[];
}

export interface RouteFinderRequest {
    startSignalId: number;
    endSectorId: number;
}

export const MESSAGE_ACTION_STATE_UPDATE = 'state-update';
export const MESSAGE_ACTION_DUMP = 'dump';

export const MESSAGE_ACTION_MESSAGE = 'message';

