import * as React from 'react';
import Signals from './parts/Signals/Signals';
import Sectors from './parts/Sectors/Sectors';
import Points from './parts/Points/Points';

export default class Scheme extends React.Component<{}, void> {
    render() {
        return (
            <svg viewBox="0 -90 2050 400" style={{width: '100%'}}>
                <polyline points="0,0 2100,0" strokeWidth="1" stroke="#555" fill="none"/>
                <polyline points="0,30 2100,30" strokeWidth="1" stroke="#555" fill="none"/>
                <polyline points="0,60 2000,60" strokeWidth="1" stroke="#555" fill="none"/>

                <polyline points="150,0 200,30" strokeWidth="1" stroke="#555" fill="none"/>
                <polyline points="125,60 175,30" strokeWidth="1" stroke="#555" fill="none"/>
                <polyline points="225,30 275,0" strokeWidth="1" stroke="#555" fill="none"/>
                <polyline points="275,30 325,60" strokeWidth="1" stroke="#555" fill="none"/>

                <polyline points="350,0 400,-30 1575,-30 1625,0" strokeWidth="1" stroke="#555" fill="none"/>
                <polyline points="400,-30 450,-60 1000,-60 1050,-30" strokeWidth="1" stroke="#555" fill="none"/>

                <polyline points="400,30 600,150 1450,150" strokeWidth="1" stroke="#555" fill="none"/>
                <polyline points="500,90 1700,90 1830,220 1830,300" strokeWidth="1" stroke="#555" fill="none"/>
                <polyline points="550,90 600,120 1700,120 1800,220 1800,300" strokeWidth="1" stroke="#555"
                          fill="none"/>

                <polyline points="375,60 725,270 1100,270 1200,210" strokeWidth="1" stroke="#555" fill="none"/>
                <polyline points="575,180 1400,180" strokeWidth="1" stroke="#555" fill="none"/>
                <polyline points="625,210 1350,210 1500,120" strokeWidth="1" stroke="#555" fill="none"/>
                <polyline points="675,210 725,240 1500,240" strokeWidth="1" stroke="#555" fill="none"/>

                <polyline points="1425,0 1475,30" strokeWidth="1" stroke="#555" fill="none"/>
                <polyline points="1500,30 1700,150" strokeWidth="1" stroke="#555" fill="none"/>
                <polyline points="1600,120 1700,60" strokeWidth="1" stroke="#555" fill="none"/>

                <polyline points="1750,60 1800,90" strokeWidth="1" stroke="#555" fill="none"/>

                <polyline points="1775,60 1825,30" strokeWidth="1" stroke="#555" fill="none"/>
                <polyline points="1850,30 1900,0" strokeWidth="1" stroke="#555" fill="none"/>

                <polyline points="1700,30 1650,0" strokeWidth="1" stroke="#555" fill="none"/>

                <Sectors/>
                <Signals/>
                <Points/>

            </svg>
        );
    }
}
