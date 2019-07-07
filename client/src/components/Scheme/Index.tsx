import * as React from 'react';
import Signals from './Parts/Signals/Signals';
import Points from './Parts/Points/Points';
import Sectors from './Parts/Sectors/Sectors';
import { SchemeItem } from '../../definition/all';
import BanalizedABs from './Parts/BanalizedAB/Index';

interface Props {
    scheme: SchemeItem;
}

export default class Scheme extends React.Component<Props, {}> {

    public render() {
        const {scheme} = this.props;
        return (
            <svg viewBox={scheme.viewBox} style={{width: '100%'}}>


                <Sectors sectors={scheme.objects.sectors}/>
                <Points points={scheme.objects.points}/>
                <Signals signals={scheme.objects.signals}/>
                <BanalizedABs ABs={scheme.objects.banalizedAB}/>

            </svg>
        );
    }
}
// <ABSectors autoBlockSectors={scheme.objects.ABSectors}/>
// <g className="bg-scheme">
//                     <polyline points="0,0 2100,0"/>
//                     <polyline points="0,30 2100,30"/>
//                     <polyline points="0,60 2000,60"/>
//
//                     <polyline points="150,0 200,30"/>
//                     <polyline points="125,60 175,30"/>
//                     <polyline points="225,30 275,0"/>
//                     <polyline points="275,30 325,60"/>
//
//                     <polyline points="350,0 400,-30 1575,-30 1625,0"/>
//                     <polyline points="400,-30 450,-60 1000,-60 1050,-30"/>
//
//                     <polyline points="400,30 600,150 1450,150"/>
//                     <polyline points="500,90 1725,90 1850,210 1900,210"/>
//                     <polyline points="550,90 600,120 1725,120 1850,240 1900,240"/>
//
//                     <polyline points="375,60 725,270 1100,270 1200,210"/>
//                     <polyline points="575,180 1400,180"/>
//                     <polyline points="625,210 1350,210 1500,120"/>
//                     <polyline points="675,210 725,240 1500,240"/>
//
//                     <polyline points="1425,0 1475,30"/>
//                     <polyline points="1500,30 1700,150"/>
//                     <polyline points="1600,120 1700,60"/>
//
//                     <polyline points="1750,60 1800,90"/>
//
//                     <polyline points="1775,60 1825,30"/>
//                     <polyline points="1850,30 1900,0"/>
//
//                     <polyline points="1700,30 1650,0"/>
//                 </g>
