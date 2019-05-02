export interface SectorDefinition {
    name: string;
    id: number;
    SVGData: {
        points: string[],
        px: number;
        py: number;
    }
}

import rail1 from './Sectors/Rail1';

export const sectors: SectorDefinition[] = [
        ...rail1,
        {
            name: "2LK_0",
            id: 2001,
            SVGData: {points: ['0,30 100,30'], px: 0, py: 0},
        },

        {
            name: "2LK_1",
            id: 2002,
            SVGData: {points: ['100,30 212.5,30', '200,30 175,15', '150,45 175,30'], px: 0, py: 0},
        },

        {
            name: "2LK_2",
            id: 2003,
            SVGData: {points: ['212.5,30 325,30', '225,30 250,15', '275,30 300,45'], px: 0, py: 0},
        },

        {
            name: "2LK_3",
            id: 2004,
            SVGData: {points: ['325,30 500,30', '400,30 425,45'], px: 0, py: 0},
        },

        {
            name: "2SK",
            id: 2005,
            SVGData: {points: ['500,30 1400,30'], px: 0, py: 0},
        },

        {
            name: "2BS_0",
            id: 2006,
            SVGData: {points: ['1400,30 1550,30', '1450,15 1475,30', '1500,30 1525,45'], px: 0, py: 0},
        },

        {
            name: "2BS_1",
            id: 2007,
            SVGData: {points: ['1550,30 1650,30'], px: 0, py: 0},
        },

        {
            name: "2BS_2",
            id: 2008,
            SVGData: {points: ['1650,30 1925,30', '1875,15 1850,30', '1675,15 1700,30', '1800,45 1825,30'], px: 0, py: 0},
        },
        {
            name: "2BS_3",
            id: 2009,
            SVGData: {points: ['1925,30 2000,30'], px: 0, py: 0},
        },

    ]
;
