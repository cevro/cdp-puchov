export const SIGNAL_ENTRY = 1;
export const SIGNAL_EXIT = 2;
export const SIGNAL_PATH = 3;
export const SIGNAL_SHIFT = 4;

export type signalLight = 'HZ' | 'Z' | 'C' | 'B' | 'X' | 'DZ' | 'M';

export interface SignalDefinition {
    name: string;
    id: number;
    type: number;
    SVGData: {
        rotate: number;
        x: number;
        y: number;
    };
    lights: signalLight [];
}

const entrySignals: SignalDefinition[] = [
    {
        name: '1L',
        id: 1,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 0, x: 0, y: 0},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },
    {
        name: '2L',
        id: 2,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 0, x: 0, y: 30},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },
    {
        name: '1S',
        id: 20,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 180, x: 1900, y: 210},
        lights: ['HZ', 'Z', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: '2S',
        id: 21,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 180, x: 1900, y: 240},
        lights: ['HZ', 'Z', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: '1BS',
        id: 22,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 180, x: 2000, y: 0},
        lights: ['HZ', 'Z', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: '2BS',
        id: 23,
        type: SIGNAL_ENTRY,
        SVGData: {rotate: 180, x: 2000, y: 30},
        lights: ['HZ', 'Z', 'C', 'B', 'X', 'DZ'],
    },
];
const exitSignalsL: SignalDefinition[] = [
    {
        name: 'L1',
        id: 3,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: 1400, y: 0},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L2',
        id: 4,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: 1400, y: 30},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },
    {
        name: 'L3a',
        id: 5,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: 1550, y: -30},
        lights: ['Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L4',
        id: 6,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: 1475, y: 60},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L6',
        id: 7,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: 1475, y: 90},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L8',
        id: 8,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: 1425, y: 120},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L10',
        id: 9,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: 1375, y: 150},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L12',
        id: 10,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: 1325, y: 180},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L14a',
        id: 11,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 0, x: 1325, y: 210},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },
];
const exitSignalsS: SignalDefinition[] = [
    {
        name: 'S1',
        id: 26,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: 500, y: 0},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S2',
        id: 27,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: 500, y: 30},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S3',
        id: 28,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: 475, y: -30},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S4',
        id: 29,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: 525, y: 60},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S6',
        id: 30,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: 625, y: 90},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S8',
        id: 31,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: 625, y: 120},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S10',
        id: 32,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: 625, y: 150},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S12',
        id: 33,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: 650, y: 180},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S14',
        id: 34,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: 750, y: 210},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S16',
        id: 35,
        type: SIGNAL_EXIT,
        SVGData: {rotate: 180, x: 750, y: 240},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },
];
const pathSignalsL: SignalDefinition[] = [
    {
        name: 'Lc3',
        id: 106,
        type: SIGNAL_PATH,
        SVGData: {rotate: 0, x: 975, y: -30},
        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },
    {
        name: 'Lc14',
        id: 12,
        type: SIGNAL_PATH,
        SVGData: {rotate: 0, x: 1125, y: 210},
        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: 'Lc16',
        id: 13,
        type: SIGNAL_PATH,
        SVGData: {rotate: 0, x: 1075, y: 240},
        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },
];
const pathSignalsS: SignalDefinition[] = [
    {
        name: 'Sc3a',
        id: 24,
        type: SIGNAL_PATH,
        SVGData: {rotate: 180, x: 1075, y: -30},
        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: 'Sc14a',
        id: 25,
        type: SIGNAL_PATH,
        SVGData: {rotate: 180, x: 1225, y: 210},
        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },
];

export const signals: SignalDefinition[] = [
    ...entrySignals,
    ...exitSignalsL,
    ...exitSignalsS,
    ...pathSignalsL,
    ...pathSignalsS,
    {
        name: 'Se1',
        id: 2001,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 180, x: 25, y: 0},
        lights: ['M', 'B'],
    },
    {
        name: 'Se2',
        id: 2002,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 180, x: 25, y: 30},
        lights: ['M', 'B'],
    },
    {
        name: 'Se3',
        id: 2003,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 0, x: 100, y: 60},
        lights: ['M', 'B'],
    },
    {
        name: 'Se4',
        id: 2004,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 0, x: 125, y: 30},
        lights: ['M', 'B'],
    },
    {
        name: 'Se5',
        id: 2005,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 0, x: 125, y: 0},
        lights: ['M', 'B'],
    },
    {
        name: 'Se6',
        id: 2006,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 0, x: 275, y: 60},
        lights: ['M', 'B'],
    },
    {
        name: 'Se7',
        id: 2007,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 0, x: 325, y: 30},
        lights: ['M', 'B'],
    },
    {
        name: 'Se8',
        id: 2008,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 0, x: 325, y: 0},
        lights: ['M', 'B'],
    },
    {
        name: 'Se9',
        id: 2009,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 0, x: 350, y: 60},
        lights: ['M', 'B'],
    },
    {
        name: 'Se11',
        id: 2011,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 180, x: 750, y: 270},
        lights: ['M', 'B'],
    },
    {
        name: 'Se19',
        id: 2019,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 0, x: 1075, y: 270},
        lights: ['M', 'B'],
    },
    {
        name: 'Se20',
        id: 2020,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 0, x: 975, y: -60},
        lights: ['M', 'B'],
    },
    {
        name: 'Se102',
        id: 2102,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 180, x: 1250, y: 240},
        lights: ['M', 'B'],
    },
    {
        name: 'Se21',
        id: 2021,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 180, x: 1550, y: 30},
        lights: ['M', 'B'],
    },
    {
        name: 'Se22',
        id: 2022,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 180, x: 1525, y: 120},
        lights: ['M', 'B'],
    },
    {
        name: 'Se23',
        id: 2023,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 180, x: 1600, y: 60},
        lights: ['M', 'B'],
    },
    {
        name: 'Se24',
        id: 2024,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 0, x: 1650, y: 60},
        lights: ['M', 'B'],
    },
    {
        name: 'Se25',
        id: 2025,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 0, x: 1650, y: 30},
        lights: ['M', 'B'],
    },
    {
        name: 'Se26',
        id: 2026,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 180, x: 1700, y: 90},
        lights: ['M', 'B'],
    },
    {
        name: 'Se27',
        id: 2027,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 180, x: 1700, y: 120},
        lights: ['M', 'B'],
    },
    {
        name: 'Se29',
        id: 2029,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 180, x: 1700, y: 0},
        lights: ['M', 'B'],
    },
    {
        name: 'Se34',
        id: 2034,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 0, x: 1850, y: 0},
        lights: ['M', 'B'],
    },
    {
        name: 'Se35',
        id: 2035,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 180, x: 1925, y: 0},
        lights: ['M', 'B'],
    },
    {
        name: 'Se36',
        id: 2036,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 180, x: 1925, y: 30},
        lights: ['M', 'B'],
    },
    {
        name: 'Se37',
        id: 2037,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 0, x: 1875, y: 210},
        lights: ['M', 'B'],
    },
    {
        name: 'Se38',
        id: 2038,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 0, x: 1875, y: 240},
        lights: ['M', 'B'],
    },
    {
        name: 'Se39',
        id: 2039,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 0, x: 1975, y: 0},
        lights: ['M', 'B'],
    },
    {
        name: 'Se40',
        id: 2040,
        type: SIGNAL_SHIFT,
        SVGData: {rotate: 0, x: 1975, y: 30},
        lights: ['M', 'B'],
    },
];
