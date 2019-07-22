import {
    SignalBackEndDefinition,
    signalLight,
} from '../components/definitions/Signals';
import {TurnoutDefinition} from '../components/definitions/Points';
import {
    autoBlockPuLpM,
    AutoBlockSectorFrontEndDefinition,
} from './autoBlock/Pu-LpM';
import {SectorDefinition} from '../components/definitions/Sectors';

export type signalLight = 'HZ' | 'Z' | 'C' | 'B' | 'X' | 'DZ' | 'M';

export interface SignalFrontEndDefinition extends SignalBackEndDefinition {
    name: string;
    type: number;
    construction?: 'T' | 'K';
    SVGData: {
        rotate: number;
        x: number;
        y: number;
    };
    lights: signalLight [];
}

export interface SchemeItem {
    cards: {
        points: boolean;
        sectors: boolean;
        ABSectors: boolean;
        signals: boolean;
        routeBuilder: boolean;
        routes: boolean;
    };
    objects: {
        sectors: SectorDefinition[]
        signals: SignalFrontEndDefinition[];
        points: TurnoutDefinition[];
        ABSectors: AutoBlockSectorFrontEndDefinition[];
        biDirAB: BiDirABDefinition[];
    };
    viewBox: string;
}

export interface frontEndScheme {
    [key: string]: SchemeItem;
}

export interface BiDirABDefinition {
    locoNetId: number;
    mainDir: 'L' | 'P';
    SVDData: {
        x: number;
        y: number;
    };
}

export const frontEndScheme: frontEndScheme = {
    'ab-PuLpM': autoBlockPuLpM,
    ZSTPu: {
        cards: {
            signals: true,
            sectors: true,
            ABSectors: true,
            points: true,
            routeBuilder: true,
            routes: true,
        },
        objects: {
            sectors: [],
            signals: [],
            points: [],
            ABSectors: [],
            biDirAB: [],
        },
        viewBox: '-300 -90 2650 400',
    },
};
