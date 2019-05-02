import * as React from 'react';

const STATUS_FREE = 1;
const STATUS_BUSY = 0;
const STATUS_IN_VC = 2;
const STATUS_IN_PC = 3;
const STATUS_VYLUKA = 4;

interface IObvodProps {
    name: string;
    status: number;
    busy: boolean;
    SVGData: any;
}

export default class Sector extends React.Component<IObvodProps, void> {
    render() {
        let {name, status, busy, SVGData} = this.props;
        let statusColor = this.getStatusColor(status);
        return (
            <g
                className={busy ? 'busy' : 'free'}
                transform={'translate(' + SVGData.px + ',' + SVGData.py + ')'}>
                {SVGData.points.map((points, index) => {
                    return (<polyline stroke={statusColor} key={index} points={points}/>)
                })}
            </g>
        );
    }

    private getStatusColor(status) {
        switch (status) {
            case STATUS_FREE : {
                return '#ddd';
            }
            case STATUS_BUSY : {
                return '#f00';
            }
            case STATUS_IN_VC : {
                return '#0f0';
            }
            case STATUS_IN_PC : {
                return '#fff';
            }
            case STATUS_VYLUKA : {
                return '#ff0';
            }
        }
    }
}


