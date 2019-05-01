import route2S_2TK from './2S-2TK';
import route1S_2TK from './1S-2TK';
import route2S_1TK from './2S-1TK';
import route1S_1TK from './1S-1TK';

import routePAB1_1S from './PAB-1S';
import routePAB2_2S from './PAB-2S';
import {
    route_1L_L1,
    route_1L_L1_a1,
} from '../puchov/routes/1L';

export const trainRoutes = [route_1L_L1,
    route1S_2TK,
    route2S_1TK,
    route2S_2TK,
    route1S_1TK,
    routePAB2_2S,
    routePAB1_1S,
    route_1L_L1_a1,
];
