const SIGNAL_ENTRY = 1;
const SIGNAL_EXIT = 2;
const SIGNAL_PATH = 3;

export interface SignalDefinition {
    name: string;
    id: number;
    type: number;
    SVGData: any,
}

export const Signals: SignalDefinition[] = [
    {
        name: '1L',
        id: 1,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 0, x: '50', y: '0'},
    },
    {
        name: '2L',
        id: 2,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 0, x: '50', y: '30'},
    },

    {
        name: 'L1',
        id: 3,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1400', y: '0'},
    },

    {
        name: 'L2',
        id: 4,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1400', y: '30'},
    },

    {
        name: 'Lc3',
        id: 6,
        type: SIGNAL_PATH,
        SVGData: {rotate: 0, x: '975', y: '-30'},
    },

    {
        name: 'L3a',
        id: 5,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1550', y: '-30'},
    },

    {
        name: 'L4',
        id: 6,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1475', y: '60'},
    },

    {
        name: 'L6',
        id: 7,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1475', y: '90'},
    },

    {
        name: 'L8',
        id: 8,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1425', y: '120'},
    },

    {
        name: 'L10',
        id: 9,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1375', y: '150'},
    },

    {
        name: 'L12',
        id: 10,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1325', y: '180'},
    },

    {
        name: 'L14a',
        id: 11,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: '1325', y: '210'},
    },

    {
        name: 'Lc14',
        id: 12,
        type: SIGNAL_PATH,
        SVGData: {rotate: 0, x: '1125', y: '210'},
    },

    {
        name: 'Lc16',
        id: 13,
        type: SIGNAL_PATH,
        SVGData: {rotate: 0, x: '1075', y: '240'},
    },
    {
        name: '1S',
        id: 14,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 270, x: '1830', y: '300'},
    },

    {
        name: '2S',

        id: 15,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 270, x: '1800', y: '300'},
    },

    {
        name: '1BS',

        id: 16,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 180, x: '2000', y: '0'},
    },

    {
        name: '2BS',

        id: 12,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 180, x: '2000', y: '30'},
    },

    {
        name: 'Sc3a',

        id: 12,
        type: SIGNAL_PATH,
        SVGData: {rotate: 180, x: '1075', y: '-30'},
    },

    {
        name: 'Sc14a',

        id: 12,
        type: SIGNAL_PATH,
        SVGData: {rotate: 180, x: '1225', y: '210'},
    },

    {
        name: 'S1',

        id: 12,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '500', y: '0'},
    },

    {
        name: 'S2',

        id: 12,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '500', y: '30'},
    },

    {
        name: 'S3',

        id: 12,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '475', y: '-30'},
    },

    {
        name: 'S4',

        id: 12,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '525', y: '60'},
    },

    {
        name: 'S6',

        id: 12,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '625', y: '90'},
    },

    {
        name: 'S8',

        id: 12,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '625', y: '120'},
    },

    {
        name: 'S10',

        id: 12,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '625', y: '150'},
    },

    {
        name: 'S12',

        id: 12,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '650', y: '180'},
    },

    {
        name: 'S14',

        id: 12,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '750', y: '210'},
    },

    {
        name: 'S16',

        id: 12,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: '750', y: '240'},
    },
];
