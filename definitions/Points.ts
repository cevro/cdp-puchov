export interface PointDefinition {
    name: string;
    id: number;
    sector?: number;
    SVGData: {
        x: number;
        y: number;
        rotate: number;
        home: 1 | -1;
        dir: 'L' | 'P';
    };
}


export type requestedPointPosition = -1 | 1;

export type pointPosition = requestedPointPosition | 0;

export const points: PointDefinition[] = [
    {
        name: '1',
        id: 1,
        SVGData: {x: 125, y: 60, rotate: 0, home: 1, dir: 'L'},
        sector: 4001,
    },
    {
        name: '2',
        id: 2,
        SVGData: {x: 150, y: 0, rotate: 0, home: 1, dir: 'P'},
        sector: 1002,
    },
    {
        name: '3',
        id: 3,
        SVGData: {x: 175, y: 30, rotate: 180, home: 1, dir: 'L'},
        sector: 2002,
    },

    {
        name: '4',
        id: 4,
        SVGData: {x: 200, y: 30, rotate: 180, home: 1, dir: 'P'},
        sector: 2002,
    },
    {
        name: '5',
        id: 5,
        SVGData: {x: 225, y: 30, rotate: 0, home: 1, dir: 'L'},
    },
    {
        name: '6',
        id: 6,
        SVGData: {x: 275, y: 30, rotate: 0, home: 1, dir: 'P'},
    },
    {
        name: '7',
        id: 7,
        SVGData: {x: 275, y: 0, rotate: 180, home: 1, dir: 'L'},
        sector: 1003,
    },
    {
        name: '8',
        id: 8,
        SVGData: {x: 325, y: 60, rotate: 180, home: 1, dir: 'P'},
    },
    {
        name: '9',
        id: 9,
        SVGData: {x: 350, y: 0, rotate: 0, home: 1, dir: 'L'},
        sector: 1004,
    },
    {
        name: '10',
        id: 10,
        SVGData: {x: 375, y: 60, rotate: 0, home: 1, dir: 'P'},
    },
    {
        name: '11',
        id: 11,
        SVGData: {x: 400, y: 30, rotate: 0, home: 1, dir: 'P'},
    },
    {
        name: '12',
        id: 12,
        SVGData: {x: 575, y: 180, rotate: 26.23, home: 1, dir: 'L'},
    },
    {
        name: '13',
        id: 13,
        SVGData: {x: 400, y: -30, rotate: -26.23, home: -1, dir: 'P'},
    },
    {
        name: '',
        id: 1014,
        SVGData: {x: 450, y: 60, rotate: 0, home: 1, dir: 'P'},
    },
    {
        name: 'a14b',
        id: 2014,
        SVGData: {x: 450, y: 60, rotate: 180, home: 1, dir: 'P'},
    },
    {
        name: '15',
        id: 15,
        SVGData: {x: 500, y: 90, rotate: 26.23, home: -1, dir: 'L'},
    },
    {
        name: '16',
        id: 16,
        SVGData: {x: 625, y: 210, rotate: 26.23, home: -1, dir: 'L'},
    },
    {
        name: '17',
        id: 17,
        SVGData: {x: 550, y: 90, rotate: 0, home: 1, dir: 'P'},
    },
    {
        name: '18',
        id: 18,
        SVGData: {x: 675, y: 210, rotate: 0, home: 1, dir: 'P'},
    },

    {
        name: 'a21b',
        id: 1021,
        SVGData: {x: 1150, y: 240, rotate: 180, home: 1, dir: 'L'},
    },
    {
        name: '',
        id: 2021,
        SVGData: {x: 1150, y: 240, rotate: 0, home: 1, dir: 'L'},
    },

    {
        name: '22',
        id: 22,
        SVGData: {x: 1200, y: 210, rotate: 180, home: 1, dir: 'L'},
    },

    {
        name: '23',
        id: 23,
        SVGData: {x: 1050, y: -30, rotate: 180, home: 1, dir: 'P'},
    },
    {
        name: '24',
        id: 24,
        SVGData: {x: 1425, y: 0, rotate: 0, home: 1, dir: 'P'},
    },
    {
        name: '25',
        id: 25,
        SVGData: {x: 1475, y: 30, rotate: 180, home: 1, dir: 'P'},
    },
    {
        name: '26',
        id: 26,
        SVGData: {x: 1500, y: 30, rotate: 0, home: 1, dir: 'P'},
    },

    {
        name: '27',
        id: 27,
        SVGData: {x: 1400, y: 180, rotate: 153.77, home: 1, dir: 'P'},
    },

    {
        name: '28',
        id: 28,
        SVGData: {x: 1450, y: 150, rotate: 153.77, home: 1, dir: 'P'},
    },

    {
        name: '',
        id: 1029,
        SVGData: {x: 1550, y: 60, rotate: 180, home: 1, dir: 'P'},
    },

    {
        name: 'a29b',
        id: 2029,
        SVGData: {x: 1550, y: 60, rotate: 0, home: 1, dir: 'P'},
    },

    {
        name: '30',
        id: 30,
        SVGData: {x: 1500, y: 120, rotate: 180, home: 1, dir: 'L'},
    },

    {
        name: '31',
        id: 31,
        SVGData: {x: 1600, y: 120, rotate: 0, home: 1, dir: 'L'},
    },

    {
        name: '',
        id: 1032,
        SVGData: {x: 1600, y: 90, rotate: 180, home: 1, dir: 'P'},
    },

    {
        name: 'a32b',
        id: 2032,
        SVGData: {x: 1600, y: 90, rotate: 0, home: 1, dir: 'P'},
    },

    {
        name: '33',
        id: 33,
        SVGData: {x: 1625, y: 0, rotate: 180, home: 1, dir: 'P'},
    },

    {
        name: '',
        id: 1034,
        SVGData: {x: 1650, y: 90, rotate: 180, home: 1, dir: 'L'},
    },

    {
        name: 'a34b',
        id: 2034,
        SVGData: {x: 1650, y: 90, rotate: 0, home: 1, dir: 'L'},
    },

    {
        name: '',
        id: 1035,
        SVGData: {x: 1650, y: 120, rotate: 180, home: 1, dir: 'P'},
    },

    {
        name: 'a35b',
        id: 2035,
        SVGData: {x: 1650, y: 120, rotate: 0, home: 1, dir: 'P'},
    },
    {
        name: '36',
        id: 36,
        SVGData: {x: 1650, y: 0, rotate: 0, home: 1, dir: 'P'},
    },
    {
        name: '37',
        id: 37,
        SVGData: {x: 1700, y: 60, rotate: 180, home: 1, dir: 'L'},
    },
    {
        name: '38',
        id: 38,
        SVGData: {x: 1750, y: 60, rotate: 0, home: 1, dir: 'P'},
    },
    {
        name: '40',
        id: 40,
        SVGData: {x: 1775, y: 60, rotate: 0, home: 1, dir: 'L'},
    },

    {
        name: '41',
        id: 41,
        SVGData: {x: 1700, y: 30, rotate: 180, home: 1, dir: 'P'},
    },
    {
        name: '42',
        id: 42,
        SVGData: {x: 1825, y: 30, rotate: 180, home: 1, dir: 'L'},
    },

    {
        name: '43',
        id: 43,
        SVGData: {x: 1850, y: 30, rotate: 0, home: 1, dir: 'L'},
    },

    {
        name: '44',
        id: 44,
        SVGData: {x: 1900, y: 0, rotate: 180, home: 1, dir: 'L'},
    },
];

export const getPointById = (id: number): PointDefinition => {
    return points.filter((point) => {
        return point.id === id;
    })[0];
};

