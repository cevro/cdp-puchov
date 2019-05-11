export interface SectorDefinition {
    name: string;
    id: number;
    SVGData: {
        points: string[],
    }
}

const rail5: SectorDefinition[] = [];
const rail3: SectorDefinition[] = [
    {
        name: '3LK_0',
        id: 3001,
        SVGData: {points: ['375,-15 450,-60 550,-60', '400,-30 475,-30']},
    },
    {
        name: '3',
        id: 3002,
        SVGData: {points: ['475,-30 975,-30']},
    },
    {
        name: '3C',
        id: 3003,
        SVGData: {points: ['975,-30 1075,-30', '975,-60 1000,-60 1050,-30']},
    },
    {
        name: '3a',
        id: 3003,
        SVGData: {points: ['1075,-30 1550,-30']},
    },
];
const rail1: SectorDefinition[] = [
    {
        name: '1LK_0',
        id: 1001,
        SVGData: {points: ['0,0 125,0']},
    },
    {
        name: '1LK_1',
        id: 1002,
        SVGData: {points: ['125,0 212.5,0', '150,0 175,15']},
    },
    {
        name: '1LK_2',
        id: 1003,
        SVGData: {points: ['212.5,0 325,0', '275,0 250,15']},
    },
    {
        name: '1LK_3',
        id: 1004,
        SVGData: {points: ['325,0 500,0', '350,0 375,-15']},
    },
    {
        name: '1SK',
        id: 1005,
        SVGData: {points: ['500,0 1400,0']},
    },
    {
        name: '1BS_0',
        id: 1006,
        SVGData: {points: ['1400,0 1550,0', '1425,0 1450,15']},
    },
    {
        name: '1BS_1',
        id: 1007,
        SVGData: {points: ['1550,0 1700,0', '1550,-30 1575,-30 1625,0', '1650,0 1675,15']},
    },
    {
        name: '1BS_2',
        id: 1008,
        SVGData: {points: ['1700,0 1850,0']},
    },
    {
        name: '1BS_3',
        id: 1009,
        SVGData: {points: ['1850,0 1925,0', '1900,0 1875,15']},
    },
    {
        name: '1BS_4',
        id: 1010,
        SVGData: {points: ['1925,0 2000,0']},
    },
];
const rail2: SectorDefinition[] = [
    {
        name: '2LK_0',
        id: 2001,
        SVGData: {points: ['0,30 125,30']},
    },

    {
        name: '2LK_1',
        id: 2002,
        SVGData: {points: ['125,30 212.5,30', '200,30 175,15', '150,45 175,30']},
    },

    {
        name: '2LK_2',
        id: 2003,
        SVGData: {points: ['212.5,30 325,30', '225,30 250,15', '275,30 300,45']},
    },

    {
        name: '2LK_3',
        id: 2004,
        SVGData: {points: ['325,30 500,30', '400,30 425,45']},
    },

    {
        name: '2SK',
        id: 2005,
        SVGData: {points: ['500,30 1400,30']},
    },

    {
        name: '2BS_0',
        id: 2006,
        SVGData: {points: ['1400,30 1550,30', '1450,15 1475,30', '1500,30 1525,45']},
    },

    {
        name: '2BS_1',
        id: 2007,
        SVGData: {points: ['1550,30 1650,30']},
    },

    {
        name: '2BS_2',
        id: 2008,
        SVGData: {points: ['1650,30 1925,30', '1875,15 1850,30', '1675,15 1700,30', '1800,45 1825,30']},
    },
    {
        name: '2BS_3',
        id: 2009,
        SVGData: {points: ['1925,30 2000,30']},
    },
];
const rail4: SectorDefinition[] = [
    {
        name: '4LK_0',
        id: 4001,
        SVGData: {points: ['100,60 275,60', '125,60 150,45']},
    },
    {
        name: '4LK_1',
        id: 2009,
        SVGData: {points: ['275,60 350,60', '300,45 325,60']},
    },
    {
        name: '4LK_2',
        id: 4002,
        SVGData: {
            points: [
                '350,60 525,60',
                '425,45 475,75',
                '375,60 400,75',
            ],
        },
    },
    {
        name: '4SK',
        id: 4003,
        SVGData: {
            points: [
                '525,60 1475,60',
            ],
        },

    },
];
const rail6: SectorDefinition[] = [
    {
        name: '6LK',
        id: 6001,
        SVGData: {points: ['525,90 625,90', '550,90 600,120 625,120']},
    },
    {
        name: '6',
        id: 6002,
        SVGData: {points: ['625,90 1475,90']},
    },
];
const rail8: SectorDefinition[] = [
    {
        name: '8',
        id: 8001,
        SVGData: {points: ['625,120 1425,120']},
    },
    {
        name: '1SK_0',
        id: 8002,
        SVGData: {points: ['1425,120 1525,120', '1475,135 1500,120']},
    },
    {
        name: '1SK_0',
        id: 8002,
        SVGData: {
            points: [
                '1525,120 1700,120',
                '1600,120 1635,99',
                '1615,99 1675,135',
            ],
        },
    },
];
const rail10: SectorDefinition[] = [
    {
        name: '10LK',
        id: 10002,
        SVGData: {points: ['475,75 600,150 625,150', '500,90 525,90']},
    },
    {
        name: '10',
        id: 10002,
        SVGData: {points: ['625,150 1375,150']},
    },
];
const rail12: SectorDefinition[] = [
    {
        name: '12LK',
        id: 12001,
        SVGData: {points: ['400,75 600,195', '575,180 650,180']},
    },
    {
        name: '12',
        id: 12002,
        SVGData: {points: ['650,180 1325,180']},
    },
];
const rail14: SectorDefinition[] = [
    {
        name: '14LK',
        id: 14001,
        SVGData: {points: ['650,210 750,210', '675,210 725,240 750,240']},
    },
    {
        name: '14',
        id: 14002,
        SVGData: {points: ['750,210 1125,210']},
    },
    {
        name: '14a',
        id: 14004,
        SVGData: {points: ['1225,210 1325,210']},
    },
];
const rail16: SectorDefinition[] = [
    {
        name: '16',
        id: 16002,
        SVGData: {points: ['750,240 1075,240']},
    },
];
const rail18: SectorDefinition[] = [
    {
        name: '18LK',
        id: 16002,
        SVGData: {points: ['600,195 725,270 775,270', '625,210 650,210']},
    },
];

export const sectors: SectorDefinition[] = [
    ...rail5,
    ...rail3,
    ...rail1,
    ...rail2,
    ...rail4,
    ...rail6,
    ...rail8,
    ...rail10,
    ...rail12,
    ...rail14,
    ...rail16,
    ...rail18,
];


/*   '425,45 600,150 625,150',
                     '500,90 625,90',
                     '550,90 600,120 625,120',*/
