import {SignalSchemeDefinition} from '@definitions/signals/interfaces';
import {TurnoutDefinition} from '@definitions/points';
import {
    autoBlockPuLpM,
    AutoBlockSectorFrontEndDefinition,
} from './autoBlock/Pu-LpM';
import {SectorDefinition} from '@definitions/sectors';
import {signals} from '@definitions/signals';

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
        signals: SignalSchemeDefinition[];
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
            signals: signals,
            points: [],
            ABSectors: [],
            biDirAB: [],
        },
        viewBox: '-300 -90 2650 400',
    },
};

