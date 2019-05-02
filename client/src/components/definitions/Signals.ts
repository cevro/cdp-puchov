const SIGNAL_ENTRY = 1;
const SIGNAL_EXIT = 2;
const SIGNAL_PATH = 3;

export interface SignalDefinition {
    name: string;
    id: number;
    type: number;
    SVGData: any;
    lights: Array<'HZ' | 'Z' | 'C' | 'B' | 'X' | 'DZ'>;
}

export const Signals: SignalDefinition[] = [
    {
        name: '1L',
        id: 1,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 0, x: '50', y: '0'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },
    {
        name: '2L',
        id: 2,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 0, x: '50', y: '30'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L1',
        id: 3,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1400', y: '0'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L2',
        id: 4,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1400', y: '30'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'Lc3',
        id: 6,
        type: SIGNAL_PATH,
        SVGData: {rotate: 0, x: '975', y: '-30'},
        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: 'L3a',
        id: 5,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1550', y: '-30'},
        lights: ['Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L4',
        id: 6,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1475', y: '60'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L6',
        id: 7,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1475', y: '90'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L8',
        id: 8,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1425', y: '120'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L10',
        id: 9,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1375', y: '150'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L12',
        id: 10,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1325', y: '180'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L14a',
        id: 11,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1325', y: '210'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'Lc14',
        id: 12,
        type: SIGNAL_PATH,
        SVGData: {rotate: 0, x: '1125', y: '210'},
        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: 'Lc16',
        id: 13,
        type: SIGNAL_PATH,
        SVGData: {rotate: 0, x: '1075', y: '240'},
        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },
    {
        name: '1S',
        id: 20,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 270, x: '1830', y: '300'},
        lights: ['HZ', 'Z', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: '2S',
        id: 21,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 270, x: '1800', y: '300'},
        lights: ['HZ', 'Z', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: '1BS',
        id: 22,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 180, x: '2000', y: '0'},
        lights: ['HZ', 'Z', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: '2BS',
        id: 23,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 180, x: '2000', y: '30'},
        lights: ['HZ', 'Z', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: 'Sc3a',
        id: 24,
        type: SIGNAL_PATH,
        SVGData: {rotate: 180, x: '1075', y: '-30'},
        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: 'Sc14a',
        id: 25,
        type: SIGNAL_PATH,
        SVGData: {rotate: 180, x: '1225', y: '210'},
        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: 'S1',
        id: 26,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '500', y: '0'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S2',
        id: 27,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '500', y: '30'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S3',
        id: 28,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '475', y: '-30'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S4',
        id: 29,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '525', y: '60'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S6',
        id: 30,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '625', y: '90'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S8',
        id: 31,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '625', y: '120'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S10',
        id: 32,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '625', y: '150'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S12',
        id: 33,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '650', y: '180'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S14',
        id: 34,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '750', y: '210'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S16',
        id: 35,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '750', y: '240'},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },
];