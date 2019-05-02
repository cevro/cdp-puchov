export interface PointDefinition {
    name: string;
    id: number;
    SVGData: {
        x: number;
        y: number;
        rotate: number;
        home: 1 | -1;
        dir: 'L' | 'P';
    },
}

export const points: PointDefinition[] = [
    {
        name: '1',
        id: 1,
        SVGData: {x: 125, y: 60, rotate: 0, home: +1, dir: 'L'},
    },
    {
        name: '2',
        id: 2,
        SVGData: {x: 150, y: 0, rotate: 0, home: +1, dir: 'P'},
    },
    {
        name: '3',
        id: 3,
        SVGData: {x: 175, y: 30, rotate: 180, home: +1, dir: 'L'},
    },

    {
        name: '4',
        id: 4,
        SVGData: {x: 200, y: 30, rotate: 180, home: +1, dir: 'P'},
    },
    {
        name: '5',
        id: 5,
        SVGData: {x: 225, y: 30, rotate: 0, home: +1, dir: 'L'},
    },
    {
        name: '6',
        id: 6,
        SVGData: {x: 275, y: 30, rotate: 0, home: +1, dir: 'P'},
    },
    {
        name: '7',
        id: 7,
        SVGData: {x: 275, y: 0, rotate: 180, home: +1, dir: 'L'},
    },
    {
        name: '9',
        id: 9,
        SVGData: {x: 350, y: 0, rotate: 0, home: +1, dir: 'L'},
    },
    {
        name: '10',
        id: 10,
        SVGData: {x: 375, y: 60, rotate: 0, home: +1, dir: 'P'},
    },
    {
        name: '11',
        id: 11,
        SVGData: {x: 400, y: 30, rotate: 0, home: +1, dir: 'P'},
    },
    {
        name: '12',
        id: 12,
        SVGData: {x: 575, y: 180, rotate: 26.23, home: +1, dir: 'L'},
    },
    {
        name: '13',
        id: 13,
        SVGData: {x: 400, y: -30, rotate: -26.23, home: -1, dir: 'P'},
    },
    {
        name: '',
        id: 1014,
        SVGData: {x: 450, y: 60, rotate: 0, home: +1, dir: 'P'},
    },
    {
        name: 'a14b',
        id: 2014,
        SVGData: {x: 450, y: 60, rotate: 180, home: +1, dir: 'P'},
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
        SVGData: {x: 550, y: 90, rotate: 0, home: +1, dir: 'P'},
    },
    {
        name: '18',
        id: 18,
        SVGData: {x: 675, y: 210, rotate: 0, home: +1, dir: '9'},
    },
];
