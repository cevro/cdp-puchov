import {SignalSchemeDefinition} from './signals/interfaces';
import {signalTypes} from './signals/signalTypes';
import {getSignalDefinition} from './signals/all';

const entrySignals: SignalSchemeDefinition[] = [
    {
        name: '1L',
        locoNetId: 1,
        construction: 'K',
        type: signalTypes.TYPE_ENTRY,
        SVGData: {rotate: 0, x: 0, y: 0},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },
    {
        name: '2L',
        locoNetId: 2,
        construction: 'K',
        type: signalTypes.TYPE_ENTRY,
        SVGData: {rotate: 0, x: 0, y: 30},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },
    {

        name: '1S',
        locoNetId: 517,
        type: signalTypes.TYPE_ENTRY,
        SVGData: {rotate: 180, x: 1900, y: 210},
        lights: ['HZ', 'Z', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: '2S',
        locoNetId: 21,
        type: signalTypes.TYPE_ENTRY,
        SVGData: {rotate: 180, x: 1900, y: 240},
        lights: ['HZ', 'Z', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: '1BS',
        locoNetId: 22,
        type: signalTypes.TYPE_ENTRY,
        SVGData: {rotate: 180, x: 2000, y: 0},
        lights: ['HZ', 'Z', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: '2BS',
        locoNetId: 23,
        type: signalTypes.TYPE_ENTRY,
        SVGData: {rotate: 180, x: 2000, y: 30},
        lights: ['HZ', 'Z', 'C', 'B', 'X', 'DZ'],
    },
];
const exitSignalsL: SignalSchemeDefinition[] = [
    {
        name: 'L1',
        locoNetId: 3,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 0, x: 1400, y: 0},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L2',
        locoNetId: 4,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 0, x: 1400, y: 30},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },
    {
        name: 'L3a',
        locoNetId: 5,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 0, x: 1550, y: -30},
        lights: ['Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L4',
        locoNetId: 6,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 0, x: 1475, y: 60},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L6',
        locoNetId: 7,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 0, x: 1475, y: 90},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L8',
        locoNetId: 8,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 0, x: 1425, y: 120},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L10',
        locoNetId: 9,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 0, x: 1375, y: 150},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L12',
        locoNetId: 10,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 0, x: 1325, y: 180},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'L14a',
        locoNetId: 11,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 0, x: 1325, y: 210},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },
];
const exitSignalsS: SignalSchemeDefinition[] = [
    {
        name: 'S1',
        locoNetId: 26,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 180, x: 500, y: 0},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S2',
        locoNetId: 27,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 180, x: 500, y: 30},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S3',
        locoNetId: 28,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 180, x: 475, y: -30},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S4',
        locoNetId: 29,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 180, x: 525, y: 60},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S6',
        locoNetId: 30,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 180, x: 625, y: 90},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S8',
        locoNetId: 31,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 180, x: 625, y: 120},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S10',
        locoNetId: 32,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 180, x: 625, y: 150},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S12',
        locoNetId: 33,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 180, x: 650, y: 180},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S14',
        locoNetId: 34,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 180, x: 750, y: 210},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },

    {
        name: 'S16',
        locoNetId: 35,
        type: signalTypes.TYPE_EXIT,
        SVGData: {rotate: 180, x: 750, y: 240},
        lights: ['HZ', 'Z', 'C', 'B', 'DZ'],
    },
];
const pathSignalsL: SignalSchemeDefinition[] = [
    {
        name: 'Lc3',
        locoNetId: 106,
        type: signalTypes.TYPE_PATH,
        SVGData: {rotate: 0, x: 975, y: -30},
        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },
    {
        name: 'Lc14',
        locoNetId: 12,
        type: signalTypes.TYPE_PATH,
        SVGData: {rotate: 0, x: 1125, y: 210},
        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: 'Lc16',
        locoNetId: 13,
        type: signalTypes.TYPE_PATH,
        SVGData: {rotate: 0, x: 1075, y: 240},
        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },
];
const pathSignalsS: SignalSchemeDefinition[] = [
    {
        name: 'Sc3a',
        locoNetId: 24,
        type: signalTypes.TYPE_PATH,
        SVGData: {rotate: 180, x: 1075, y: -30},
        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },

    {
        name: 'Sc14a',
        locoNetId: 25,
        type: signalTypes.TYPE_PATH,
        SVGData: {rotate: 180, x: 1225, y: 210},
        lights: ['HZ', 'C', 'B', 'X', 'DZ'],
    },
];
const shiftSignals: SignalSchemeDefinition[] = [
    {
        name: 'Se1',
        locoNetId: 2001,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 180, x: 25, y: 0},
        lights: ['M', 'B'],
    },
    {
        name: 'Se2',
        locoNetId: 2002,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 180, x: 25, y: 30},
        lights: ['M', 'B'],
    },
    {
        name: 'Se3',
        locoNetId: 2003,
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 0, x: 100, y: 60},
        lights: ['M', 'B'],
    },
    {
        name: 'Se4',
        locoNetId: 2004,
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 0, x: 125, y: 30},
        lights: ['M', 'B'],
    },
    {
        name: 'Se5',
        locoNetId: 2005,
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 0, x: 125, y: 0},
        lights: ['M', 'B'],
    },
    {
        name: 'Se6',
        locoNetId: 2006,
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 0, x: 275, y: 60},
        lights: ['M', 'B'],
    },
    {
        name: 'Se7',
        locoNetId: 2007,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 0, x: 325, y: 30},
        lights: ['M', 'B'],
    },
    {
        name: 'Se8',
        locoNetId: 2008,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 0, x: 325, y: 0},
        lights: ['M', 'B'],
    },
    {
        name: 'Se9',
        locoNetId: 2009,
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 0, x: 350, y: 60},
        lights: ['M', 'B'],
    },
    {
        name: 'Se11',
        locoNetId: 2011,
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 180, x: 750, y: 270},
        lights: ['M', 'B'],
    },
    {
        name: 'Se19',
        locoNetId: 2019,
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 0, x: 1075, y: 270},
        lights: ['M', 'B'],
    },
    {
        name: 'Se20',
        locoNetId: 2020,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 0, x: 975, y: -60},
        lights: ['M', 'B'],
    },
    {
        name: 'Se102',
        locoNetId: 2102,
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 180, x: 1250, y: 240},
        lights: ['M', 'B'],
    },
    {
        name: 'Se21',
        locoNetId: 2021,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 180, x: 1550, y: 30},
        lights: ['M', 'B'],
    },
    {
        name: 'Se22',
        locoNetId: 2022,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 180, x: 1525, y: 120},
        lights: ['M', 'B'],
    },
    {
        name: 'Se23',
        locoNetId: 2023,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 180, x: 1600, y: 60},
        lights: ['M', 'B'],
    },
    {
        name: 'Se24',
        locoNetId: 2024,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 0, x: 1650, y: 60},
        lights: ['M', 'B'],
    },
    {
        name: 'Se25',
        locoNetId: 2025,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 0, x: 1650, y: 30},
        lights: ['M', 'B'],
    },
    {
        name: 'Se26',
        locoNetId: 2026,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 180, x: 1700, y: 90},
        lights: ['M', 'B'],
    },
    {
        name: 'Se27',
        locoNetId: 2027,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 180, x: 1700, y: 120},
        lights: ['M', 'B'],
    },
    {
        name: 'Se29',
        locoNetId: 2029,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 180, x: 1700, y: 0},
        lights: ['M', 'B'],
    },
    {
        name: 'Se34',
        locoNetId: 2034,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 0, x: 1850, y: 0},
        lights: ['M', 'B'],
    },
    {
        name: 'Se35',
        locoNetId: 2035,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 180, x: 1925, y: 0},
        lights: ['M', 'B'],
    },
    {
        name: 'Se36',
        locoNetId: 2036,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 180, x: 1925, y: 30},
        lights: ['M', 'B'],
    },
    {
        name: 'Se37',
        locoNetId: 2037,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 0, x: 1875, y: 210},
        lights: ['M', 'B'],
    },
    {
        name: 'Se38',
        locoNetId: 2038,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 0, x: 1875, y: 240},
        lights: ['M', 'B'],
    },
    {
        name: 'Se39',
        locoNetId: 2039,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 0, x: 1975, y: 0},
        lights: ['M', 'B'],
    },
    {
        name: 'Se40',
        locoNetId: 2040,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 0, x: 1975, y: 30},
        lights: ['M', 'B'],
    },
    {
        name: 'Se40',
        locoNetId: 2040,
        construction: 'T',
        type: signalTypes.TYPE_SHUNT,
        SVGData: {rotate: 0, x: 1975, y: 30},
        lights: ['M', 'B'],
    },
];

const signalAutoblokLM: SignalSchemeDefinition[] = [
    {
        ...getSignalDefinition('ab.pu-lpm.1-15'),
        SVGData: {rotate: 0, x: 2000, y: 210},
    },
    {
        ...getSignalDefinition('ab.pu-lpm.1-22'),
        SVGData: {rotate: 180, x: 2100, y: 210},
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-15'),
        SVGData: {rotate: 0, x: 2000, y: 240},
    },
    {
        ...getSignalDefinition('ab.pu-lpm.2-22'),
        SVGData: {rotate: 180, x: 2100, y: 240},
    },
];
const signalAutoblokPB: SignalSchemeDefinition[] = [
    {
        name: '1-1600',
        locoNetId: 511600,
        type: signalTypes.TYPE_AB,
        SVGData: {rotate: 180, x: -100, y: 0},
        lights: ['HZ', 'Z', 'C'],
    },
    {
        name: '1-1603',
        locoNetId: 511603,
        type: signalTypes.TYPE_AB,
        SVGData: {rotate: 0, x: -200, y: 0},
        lights: ['HZ', 'Z', 'C'],
    },
    {
        name: '2-1600',
        locoNetId: 521600,
        type: signalTypes.TYPE_AB,
        SVGData: {rotate: 180, x: -100, y: 30},
        lights: ['HZ', 'Z', 'C'],
    },
    {
        name: '2-1603',
        locoNetId: 521603,
        type: signalTypes.TYPE_AB,
        SVGData: {rotate: 0, x: -200, y: 30},
        lights: ['HZ', 'Z', 'C'],
    },
];
export const signals: SignalSchemeDefinition[] = [
    ...entrySignals,
    ...exitSignalsL,
    ...exitSignalsS,
    ...pathSignalsL,
    ...pathSignalsS,
    ...shiftSignals,
    ...signalAutoblokLM,
    ...signalAutoblokPB,
];
