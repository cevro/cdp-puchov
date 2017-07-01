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
}

export default class Sector extends React.Component<IObvodProps, void> {
    render() {
        let {name, status, busy} = this.props;
        let data = this.getData(name);
        let statusColor = this.getStatusColor(status);
        return (
            <g
                className={busy ? 'busy' : 'free'}
                transform={'translate(' + data.px + ',' + data.py + ')'}>
                {data.points.map((points, index) => {
                    return (<polyline stroke={statusColor} key={index} points={points}/>)
                })}
            </g>
        );
    }

    private getData(name: string) {
        switch (name) {
            case 'SK2_4':
                return {points: ['0,0 100,0'], px: 100, py: 200};
            case 'SK2_3':
                return {points: ['0,0 100,0', '25,0 50,25'], px: 200, py: 200};
            case 'SK2_2':
                return {points: ['0,0 100,0', '75,0 50,25'], px: 300, py: 200};
            case 'SK2_1':
                return {points: ['0,0 100,0'], px: 400, py: 200};
            case 'SK1_4':
                return {points: ['0,0 150,0'], px: 50, py: 250};
            case 'SK1_3':
                return {points: ['0,0 100,0', '75,0 50,-25'], px: 200, py: 250};
            case 'SK1_2':
                return {points: ['0,0 100,0', '25,0 50,-25'], px: 300, py: 250};
            case 'SK1_1':
                return {points: ['0,0 100,0'], px: 400, py: 250};

            case '1S_1':
                return {points: ['0,0 100,0'], px: -50, py: 250};
            case '1S_2':
                return {points: ['0,0 100,0'], px: -150, py: 250};
            case '2S_1':
                return {points: ['0,0 150,0'], px: -50, py: 200};
            case '2S_2':
                return {points: ['0,0 100,0'], px: -150, py: 200};

            default:
                return {points: [], px: 0, py: 0};
        }
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


