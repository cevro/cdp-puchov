import TrainRoute from '../../../inc/objects/tran-route/train-route';
import SectorsGroup from '../../../inc/objects/sector/sector-group';
import {
    signal_1L,
    signal_L1,
} from '../signals/L';

import {
    sector_1LK_0,
    sector_1LK_1,
    sector_1LK_2,
    sector_1LK_3,
    sector_1SK,
} from '../sectors/1SK';
import {
    sector_2LK_1,
    sector_2LK_2
} from '../sectors/2SK';

export const route_1L_L1 = new TrainRoute({
    name: '1L-L1',
    signalFrom: signal_1L,
    signalTo: signal_L1,
    speed: null,
    sectorsGroup: new SectorsGroup([sector_1SK, sector_1LK_0, sector_1LK_1, sector_1LK_2, sector_1LK_3]),
});

export const route_1L_L1_a1 = new TrainRoute({
    name: '1L-L1-a1',
    signalFrom: signal_1L,
    signalTo: signal_L1,
    speed: 40,
    sectorsGroup: new SectorsGroup([
        sector_1SK,
        sector_1LK_0,
        sector_1LK_1,
        sector_1LK_2,
        sector_1LK_3,
        sector_2LK_1,
        sector_2LK_2,
    ]),
});