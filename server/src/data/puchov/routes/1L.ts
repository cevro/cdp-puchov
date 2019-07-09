import PointPosition from '../../../inc/objects/PointPosition';

export interface TrainRouteDefinition {
    id: number;
    name: string;
    sectorIds: number[];
    pointPositions: PointPosition[];
    startSignalId: number;
    endSignalId?: number;
    endSectorId: number;
    speed: number | null;
    sufficientDistance?: boolean;
    knotId?: number;
}

const routes1L: TrainRouteDefinition[] = [
    {
        id: 1001,
        name: '1L-L1',
        sectorIds: [
            1001,
            1002,
            1003,
            1004,
            1005,
        ],
        pointPositions: [
            new PointPosition(2, 1, [{id: 4, position: 1}]),
            new PointPosition(7, 1, [{id: 5, position: 1}]),
            new PointPosition(9, 1),
        ],
        startSignalId: 1,
        endSignalId: 3,
        endSectorId: 1005,
        speed: null,
    },
    /*{
        name: '1L-L1-a1',
        sectorIds: [
            1001,
            1002,
            1003,
            1004,
            1005,
        ],
        pointPositions: [
            new PointPosition(2, 1, [{id: 4, position: 1}]),
            new PointPosition(7, 1, [{id: 5, position: 1}]),
            new PointPosition(9, 1),
        ],
        startSignalId: 1,
        endSignalId: 3,
        endSectorId: 1005,
        speed: null,
    },*/
    {
        id: 1003,
        name: '1L-L3',
        sectorIds: [
            1001,
            1002,
            1003,
            1004,
            3001,
            3010,
        ],
        pointPositions: [
            new PointPosition(2, 1, [{id: 4, position: 1}]),
            new PointPosition(7, 1, [{id: 5, position: 1}]),
            new PointPosition(9, -1),
            new PointPosition(13, 1),
        ],
        startSignalId: 1,
        endSignalId: 106,
        endSectorId: 3010,
        speed: 40,
    },
];

export const routes3L: TrainRouteDefinition[] = [
    {
        id: 3003,
        name: '3-3a',
        sectorIds: [
            3021,
            3110,
        ],
        pointPositions: [
            new PointPosition(23, 1),
        ],
        startSignalId: 106,
        endSignalId: 5,
        endSectorId: 3110,
        speed: 40,
        sufficientDistance: false,
    },
    {
        id: 3004,
        name: '3a-BE2',
        sectorIds: [
            1007,
            2008,
            2009,
            102,
        ],
        pointPositions: [
            new PointPosition(33, -1),

            new PointPosition(36, -1),
            new PointPosition(41, -1),

            new PointPosition(42, 1, [{id: 40, position: 1}]),

            new PointPosition(43, 1, [{id: 44, position: 1}]),

        ],
        startSignalId: 5,
        endSignalId: null,
        endSectorId: 102,
        speed: 40,
        sufficientDistance: true,
    },
    {
        id: 3005,
        name: '3a-BE1',
        sectorIds: [
            1007,
            1008,
            1009,
            1010,
            102,
        ],
        pointPositions: [
            new PointPosition(33, -1),
            new PointPosition(36, 1, [{id: 41, position: 1}]),
            new PointPosition(43, 1, [{id: 44, position: 1}]),
        ],
        startSignalId: 5,
        endSignalId: null,
        endSectorId: 102,
        speed: 40,
        sufficientDistance: true,
    },
];

export const routes3S: TrainRouteDefinition[] = [
    {
        id: 3503,
        name: '3a-3',
        sectorIds: [
            3021,
            3010,
        ],
        pointPositions: [
            new PointPosition(23, 1),
        ],
        startSignalId: 24,
        endSignalId: 28,
        endSectorId: 3010,
        speed: 40,
        sufficientDistance: false,
    },
];

export const routes: TrainRouteDefinition[] = [
    ...routes1L,
    ...routes3L,
    ...routes3S,
];

/*
export const route_1L_L1 = new TrainRoute(
    '1L-L1',
    [
        1001,
        1002,
        1003,
        1004,
        1005,
    ],
    [
        new PointPosition(2, 1, [{id: 4, position: 1}]),
        new PointPosition(7, 1, [{id: 5, position: 1}]),
        new PointPosition(9, 1),
    ],
    1,
    3,
    1005,
    null,
);*/

/*export const route_1L_L3 = new TrainRoute(
    '1L-L3',
    [
        1001,
        1002,
        1003,
        1004,
        3001,
        3010,
    ],
    [
        new PointPosition(2, 1, [{id: 4, position: 1}]),

        new PointPosition(7, 1, [{id: 5, position: 1}]),

        new PointPosition(9, -1),
        new PointPosition(13, 1),
    ],
    1,
    106,
    3010,
    40,
);*/
/*
export const route_2L_L4 = new TrainRoute(
    '2L-L4',
    [
        2001,
        2002,
        2003,
        2004,
        4004,
        4010,
    ],
    [
        new PointPosition(3, 1, [{id: 1, position: 1}]),

        new PointPosition(4, 1, [{id: 2, position: 1}]),

        new PointPosition(5, 1, [{id: 7, position: 1}]),

        new PointPosition(6, 1, [{id: 8, position: 1}]),

        new PointPosition(11, -1),
        new PointPosition(2014, -1),

        new PointPosition(1014, 1),
    ],
    2,
    6,
    4010,
    40,
);*/
/*
export const route_1SK_8L = new TrainRoute(
    '1SK_8L',
    [],
    [
        new PointPosition(24, -1),
        new PointPosition(25, -1),

        new PointPosition(26, -1),
        new PointPosition(1029, -1),

        new PointPosition(2029, -1),
        new PointPosition(1032, -1),

        new PointPosition(2032, -1),
        new PointPosition(1035, -1),

        new PointPosition(2035, 1),


    ],
    3,
    12015,
    21001,
    40,
);*/


