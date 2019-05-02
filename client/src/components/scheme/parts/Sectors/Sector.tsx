import * as React from 'react';
import { SectorDefinition } from '../../../definitions/Sectors';

const STATUS_FREE = 1;
const STATUS_BUSY = 0;
const STATUS_IN_VC = 2;
const STATUS_IN_PC = 3;
const STATUS_VYLUKA = 4;

interface Props {
    definition: SectorDefinition;
}

export default class Sector extends React.Component<Props, {}> {
    render() {
        let {definition: {name, SVGData}} = this.props;

        return (
            <g
                className={'sector ' + this.getStatusClassname(8/*Math.floor(Math.random() * 6)*/)}
                transform={'translate(' + SVGData.px + ',' + SVGData.py + ')'}>
                {SVGData.points.map((points, index) => {
                    return (<polyline key={index} points={points}/>)
                })}
            </g>
        );
    }

    private getStatusClassname(status) {
        switch (status) {
            case STATUS_FREE :
                return 'free';
            case STATUS_BUSY :
                return 'used';
            case STATUS_IN_VC :
                return 'in-train-route';
            case STATUS_IN_PC :
                return 'in-movement-route';
            case STATUS_VYLUKA :
                return 'lockout';
            default:
                return 'undefined';
        }
    }
}


