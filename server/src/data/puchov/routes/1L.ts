import TrainRoute from '../../../inc/objects/TrainRoute';
import PointPosition from '../../../inc/objects/PointPosition';

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
        new PointPosition(2, 1),
        new PointPosition(4, 1),

        new PointPosition(7, 1),
        new PointPosition(5, 1),

        new PointPosition(9, 1),
    ],
    1,
    3,
    1005,
    null,
);

export const route_2L_L4 = new TrainRoute(
    '2L-L4',
    [
        1001,
        2001,
        2002,
        2003,
        2004,
        4004,
        4010,
    ],
    [
        new PointPosition(3, 1),
        new PointPosition(1, 1),

        new PointPosition(4, 1),
        new PointPosition(2, 1),

        new PointPosition(5, 1),
        new PointPosition(7, 1),

        new PointPosition(6, 1),
        new PointPosition(8, 1),

        new PointPosition(11, -1),
        new PointPosition(1014, 1),
        new PointPosition(2014, -1),
    ],
    2,
    6,
    4010,
    40,
);

