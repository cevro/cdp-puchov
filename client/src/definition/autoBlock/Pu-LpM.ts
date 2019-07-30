import {signalTypes} from '@definitions/signals/signalTypes';
import {SchemeItem} from '../all';
import {SectorDefinition} from '@definitions/sectors';
import {SignalSchemeDefinition} from '@definitions/signals/interfaces';
import {getSignalDefinition} from '@definitions/signals/all';
import {AutoBlockSectorDefinition} from '@definitions/ABSectors/interfaces';
import {ABSectors} from '@definitions/ABSectors/ABSectors';

export type AutoBlockSectorFrontEndDefinition = AutoBlockSectorDefinition;

const signals: SignalSchemeDefinition[] = [

    {
        ...getSignalDefinition('zst.pu.1S'),
        SVGData: {
            rotate: 180,
            x: 100,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('zst.pu.2S'),
        SVGData: {
            rotate: 180,
            x: 100,
            y: 30,
        },
    },

    {
        ...getSignalDefinition('ab.pu-lpm.1-22'),
        SVGData: {
            rotate: 180,
            x: 250,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-22'),
        SVGData: {
            rotate: 180,
            x: 250,
            y: 30,
        },
    },

    {
        ...getSignalDefinition('ab.pu-lpm.1-34'),
        SVGData: {
            rotate: 180,
            x: 400,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-34'),
        SVGData: {
            rotate: 180,
            x: 400,
            y: 30,
        },
    },

    {
        ...getSignalDefinition('ab.pu-lpm.1-50'),
        SVGData: {
            rotate: 180,
            x: 550,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-50'),
        SVGData: {
            rotate: 180,
            x: 550,
            y: 30,
        },
    },

    {
        ...getSignalDefinition('ab.pu-lpm.1-64'),
        SVGData: {
            rotate: 180,
            x: 750,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-64'),
        SVGData: {
            rotate: 180,
            x: 750,
            y: 30,
        },
    },

    {
        ...getSignalDefinition('ab.pu-lpm.'),
        name: '1-76',
        locoNetId: 507,
        type: signalTypes.TYPE_AB,
        lights: ['HZ', 'Z', 'C'],
        SVGData: {
            rotate: 180,
            x: 910,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-76'),
        SVGData: {
            rotate: 180,
            x: 910,
            y: 30,
        },
    },

    {
        ...getSignalDefinition('ab.pu-lpm.1-90'),
        SVGData: {
            rotate: 180,
            x: 1100,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-90'),
        SVGData: {
            rotate: 180,
            x: 1100,
            y: 30,
        },
    },

    {
        ...getSignalDefinition('ab.pu-lpm.1-102'),
        SVGData: {
            rotate: 180,
            x: 1210,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-102'),
        SVGData: {
            rotate: 180,
            x: 1210,
            y: 30,
        },
    },

    {
        ...getSignalDefinition('ab.pu-lpm.1-116'),
        SVGData: {
            rotate: 180,
            x: 1360,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-116'),
        SVGData: {
            rotate: 180,
            x: 1360,
            y: 30,
        },
    },

    {
        ...getSignalDefinition('ab.pu-lpm.1-15'),
        SVGData: {
            rotate: 0,
            x: 200,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-15'),
        SVGData: {
            rotate: 0,
            x: 200,
            y: 30,
        },
    },

    {
        ...getSignalDefinition('ab.pu-lpm.1-29'),
        SVGData: {
            rotate: 0,
            x: 350,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-29'),
        SVGData: {
            rotate: 0,
            x: 350,
            y: 30,
        },
    },

    {
        ...getSignalDefinition('ab.pu-lpm.1-39'),
        SVGData: {
            rotate: 0,
            x: 500,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-39'),
        SVGData: {
            rotate: 0,
            x: 500,
            y: 30,
        },
    },

    {
        ...getSignalDefinition('ab.pu-lpm.1-51'),
        SVGData: {
            rotate: 0,
            x: 600,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-51'),
        SVGData: {
            rotate: 0,
            x: 600,
            y: 30,
        },
    },

    {
        ...getSignalDefinition('ab.pu-lpm.1-65'),
        SVGData: {
            rotate: 0,
            x: 800,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-65'),
        SVGData: {
            rotate: 0,
            x: 800,
            y: 30,
        },
    },

    {
        ...getSignalDefinition('ab.pu-lpm.1-75'),
        SVGData: {
            rotate: 0,
            x: 890,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-75'),
        SVGData: {
            rotate: 0,
            x: 890,
            y: 30,
        },
    },

    {
        ...getSignalDefinition('ab.pu-lpm.1-87'),
        SVGData: {
            rotate: 0,
            x: 1050,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-87'),
        SVGData: {
            rotate: 0,
            x: 1050,
            y: 30,
        },
    },

    {
        ...getSignalDefinition('ab.pu-lpm.1-101'),
        SVGData: {
            rotate: 0,
            x: 1190,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-101'),
        SVGData: {
            rotate: 0,
            x: 1190,
            y: 30,
        },
    },

    {
        ...getSignalDefinition('ab.pu-lpm.1-115'),
        SVGData: {
            rotate: 0,
            x: 1340,
            y: 0,
        },
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-115'),
        SVGData: {
            rotate: 0,
            x: 1340,
            y: 30,
        },
    },

    {
        name: '1L',
        locoNetId: 537,
        type: signalTypes.TYPE_ENTRY,
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
        type: signalTypes.TYPE_ENTRY,
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
        ABSectors: ABSectors,
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
