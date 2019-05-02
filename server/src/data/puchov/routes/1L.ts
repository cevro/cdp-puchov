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
    sector_2LK_2,
} from '../sectors/2SK';
import TrainRoute from '../../../inc/objects/TrainRoute';

export const route_1L_L1 = new TrainRoute('1L-L1', [
    sector_1SK,
    sector_1LK_0,
    sector_1LK_1,
    sector_1LK_2,
    sector_1LK_3
], [], signal_1L, signal_L1, null);

export const route_1L_L1_a1 = new TrainRoute('1L-L1-a1', [
    sector_1SK,
    sector_1LK_0,
    sector_1LK_1,
    sector_1LK_2,
    sector_1LK_3,
    sector_2LK_1,
    sector_2LK_2,
], [], signal_1L, signal_L1, 40);
