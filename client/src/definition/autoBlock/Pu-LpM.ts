import { AutoBlockSectorDefinition } from '../../../../definitions/AutoBlockSectors';
import { SignalTypes } from '../../components/definitions/Signals';
import {
    SchemeItem,
    SignalFrontEndDefinition,
} from '../all';
import { SectorDefinition } from '../../../../server/src/definitions/Sectors';

export interface AutoBlockSectorFrontEndDefinition extends AutoBlockSectorDefinition {
}

const autoBlockSectors: AutoBlockSectorFrontEndDefinition[] = [
    {locoNetId: 700},
    {locoNetId: 701},
    {locoNetId: 702},
    {locoNetId: 703},
    {locoNetId: 704},

    {locoNetId: 705},
    {locoNetId: 706},
    {locoNetId: 707},
    {locoNetId: 708},
    {locoNetId: 709},

    {locoNetId: 710},
    {locoNetId: 711},
    {locoNetId: 712},
    {locoNetId: 713},
    {locoNetId: 714},
    {locoNetId: 715},
    {locoNetId: 716},
    {locoNetId: 717},

    {locoNetId: 720},
    {locoNetId: 721},
    {locoNetId: 722},
    {locoNetId: 723},
    {locoNetId: 724},
    {locoNetId: 725},
    {locoNetId: 726},
    {locoNetId: 727},
    {locoNetId: 728},
    {locoNetId: 729},

    {locoNetId: 730},
    {locoNetId: 731},
    {locoNetId: 732},
    {locoNetId: 733},
    {locoNetId: 734},
    {locoNetId: 735},
    {locoNetId: 736},
    {locoNetId: 737},
    {locoNetId: 738},
    {locoNetId: 739},


];

const signals: SignalFrontEndDefinition[] = [

    {
        name: '1S',
        locoNetId: 517,
        type: SignalTypes.TYPE_ENTRY,
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
        SVGData: {
            rotate: 180,
            x: 100,
            y: 0,
        },
    },
    {
        name: '2S',
        locoNetId: 516,
        type: SignalTypes.TYPE_ENTRY,
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
        SVGData: {
            rotate: 180,
            x: 100,
            y: 30,
        },
    },

    {
        name: '1-22',
        locoNetId: 515,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 180,
            x: 250,
            y: 0,
        },
    },
    {
        name: '2-22',
        locoNetId: 514,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 180,
            x: 250,
            y: 30,
        },
    },

    {
        name: '1-34',
        locoNetId: 513,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 180,
            x: 400,
            y: 0,
        },
    },
    {
        name: '2-34',
        locoNetId: 512,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 180,
            x: 400,
            y: 30,
        },
    },

    {
        name: '1-50',
        locoNetId: 511,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 180,
            x: 550,
            y: 0,
        },
    },
    {
        name: '2-50',
        locoNetId: 510,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 180,
            x: 550,
            y: 30,
        },
    },

    {
        name: '1-64',
        locoNetId: 509,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 180,
            x: 750,
            y: 0,
        },
    },
    {
        name: '2-64',
        locoNetId: 508,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 180,
            x: 750,
            y: 30,
        },
    },

    {
        name: '1-76',
        locoNetId: 507,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 180,
            x: 910,
            y: 0,
        },
    },
    {
        name: '2-76',
        locoNetId: 506,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 180,
            x: 910,
            y: 30,
        },
    },

    {
        name: '1-120',
        locoNetId: 505,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 180,
            x: 1100,
            y: 0,
        },
    },
    {
        name: '2-120',
        locoNetId: 504,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 180,
            x: 1100,
            y: 30,
        },
    },

    {
        name: '1-102',
        locoNetId: 503,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 180,
            x: 1210,
            y: 0,
        },
    },
    {
        name: '2-102',
        locoNetId: 502,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 180,
            x: 1210,
            y: 30,
        },
    },

    {
        name: '1-116',
        locoNetId: 501,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 180,
            x: 1360,
            y: 0,
        },
    },
    {
        name: '2-116',
        locoNetId: 500,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 180,
            x: 1360,
            y: 30,
        },
    },


    {
        name: '1-15',
        locoNetId: 519,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 200,
            y: 0,
        },
    },
    {
        name: '2-15',
        locoNetId: 518,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 200,
            y: 30,
        },
    },

    {
        name: '1-29',
        locoNetId: 521,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 350,
            y: 0,
        },
    },
    {
        name: '2-29',
        locoNetId: 520,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 350,
            y: 30,
        },
    },

    {
        name: '1-39',
        locoNetId: 523,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 500,
            y: 0,
        },
    },
    {
        name: '2-39',
        locoNetId: 522,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 500,
            y: 30,
        },
    },


    {
        name: '1-51',
        locoNetId: 525,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 600,
            y: 0,
        },
    },
    {
        name: '2-51',
        locoNetId: 524,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 600,
            y: 30,
        },
    },

    {
        name: '1-65',
        locoNetId: 527,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 800,
            y: 0,
        },
    },
    {
        name: '2-65',
        locoNetId: 526,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 800,
            y: 30,
        },
    },

    {
        name: '1-75',
        locoNetId: 529,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 890,
            y: 0,
        },
    },
    {
        name: '2-75',
        locoNetId: 528,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 890,
            y: 30,
        },
    },

    {
        name: '1-87',
        locoNetId: 531,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 1050,
            y: 0,
        },
    },
    {
        name: '2-87',
        locoNetId: 530,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 1050,
            y: 30,
        },
    },

    {
        name: '1-101',
        locoNetId: 533,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 1190,
            y: 0,
        },
    },
    {
        name: '2-101',
        locoNetId: 532,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 1190,
            y: 30,
        },
    },

    {
        name: '1-115',
        locoNetId: 535,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 1340,
            y: 0,
        },
    },
    {
        name: '2-115',
        locoNetId: 534,
        type: SignalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 0,
            x: 1340,
            y: 30,
        },
    },

    {
        name: '1L',
        locoNetId: 537,
        type: SignalTypes.TYPE_ENTRY,
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
        SVGData: {
            rotate: 0,
            x: 1500,
            y: 0,
        },
    },
    {
        name: '2L',
        locoNetId: 536,
        type: SignalTypes.TYPE_ENTRY,
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
        SVGData: {
            rotate: 0,
            x: 1500,
            y: 30,
        },
    },

];

const sectors1: SectorDefinition[] = [
    {
        name: '',
        id: 101,
        SVGData: {
            points: ['100,0 200,0'],
        },
    },
    {
        name: '',
        id: 103,
        SVGData: {
            points: ['200,0 250,0'],
        },
    },
    {
        name: '',
        id: 105,
        SVGData: {
            points: ['250,0 350,0'],
        },
    },
    {
        name: '',
        id: 107,
        SVGData: {
            points: ['350,0 400,0'],
        },
    },
    {
        name: '',
        id: 109,
        SVGData: {
            points: ['400,0 500,0'],
        },
    },
    {
        name: '',
        id: 111,
        SVGData: {
            points: ['500,0 550,0'],
        },
    },
    {
        name: '',
        id: 113,
        SVGData: {
            points: ['550,0 600,0'],
        },
    },
    {
        name: '',
        id: 115,
        SVGData: {
            points: ['600,0 750,0'],
        },
    },
    {
        name: '',
        id: 117,
        SVGData: {
            points: ['750,0 800,0'],
        },
    },
    {
        name: '',
        id: 119,
        SVGData: {
            points: ['800,0 900,0'],
        },
    },
    {
        name: '',
        id: 121,
        SVGData: {
            points: ['900,0 1050,0'],
        },
    },
    {
        name: '',
        id: 123,
        SVGData: {
            points: ['1050,0 1100,0'],
        },
    },
    {
        name: '',
        id: 125,
        SVGData: {
            points: ['1100,0 1200,0'],
        },
    },
    {
        name: '',
        id: 127,
        SVGData: {
            points: ['1200,0 1400,0'],
        },
    },
    {
        name: '',
        id: 129,
        SVGData: {
            points: ['1350,0 1500,0'],
        },
    },
];

const sectors2: SectorDefinition[] = [
    {
        name: '',
        id: 102,
        SVGData: {
            points: ['100,30 200,30'],
        },
    },
    {
        name: '',
        id: 104,
        SVGData: {
            points: ['200,30 250,30'],
        },
    },
    {
        name: '',
        id: 106,
        SVGData: {
            points: ['250,30 350,30'],
        },
    },
    {
        name: '',
        id: 108,
        SVGData: {
            points: ['350,30 400,30'],
        },
    },
    {
        name: '',
        id: 110,
        SVGData: {
            points: ['400,30 500,30'],
        },
    },
    {
        name: '',
        id: 112,
        SVGData: {
            points: ['500,30 550,30'],
        },
    },
    {
        name: '',
        id: 114,
        SVGData: {
            points: ['550,30 600,30'],
        },
    },
    {
        name: '',
        id: 116,
        SVGData: {
            points: ['600,30 750,30'],
        },
    },
    {
        name: '',
        id: 118,
        SVGData: {
            points: ['750,30 800,30'],
        },
    },
    {
        name: '',
        id: 120,
        SVGData: {
            points: ['800,30 900,30'],
        },
    },
    {
        name: '',
        id: 122,
        SVGData: {
            points: ['900,30 1050,30'],
        },
    },
    {
        name: '',
        id: 124,
        SVGData: {
            points: ['1050,30 1100,30'],
        },
    },
    {
        name: '',
        id: 126,
        SVGData: {
            points: ['1100,30 1200,30'],
        },
    },
    {
        name: '',
        id: 128,
        SVGData: {
            points: ['1200,30 1400,30'],
        },
    },
    {
        name: '',
        id: 130,
        SVGData: {
            points: ['1350,30 1500,30'],
        },
    },
];

export const autoBlockPuLpM: SchemeItem = {
    cards: {
        signals: true,
        sectors: true,
        ABSectors: true,
        points: false,
        routeBuilder: false,
        routes: false,
    },
    objects: {
        sectors: [
            ...sectors1,
            ...sectors2,
        ],
        signals: signals,
        points: [],
        ABSectors: autoBlockSectors,
        biDirAB: [
            {
                locoNetId: 451,
                mainDir: 'L',
                SVDData: {
                    x: 750,
                    y: -30,
                },
            },
            {
                locoNetId: 450,
                mainDir: 'P',
                SVDData: {
                    x: 750,
                    y: 60,
                },
            },
        ],
    },
    viewBox: '0 -60 1600 150',
};
