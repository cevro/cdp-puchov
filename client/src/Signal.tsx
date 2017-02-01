import * as React from 'react';

interface ISignalProps {
    name: string;
    status: number;
}

export default class Signal extends React.Component<ISignalProps,void> {
    render() {
        let {name, status} = this.props;
        let data = this.getData(name);
        return (
            <g
                transform={'translate('+data.x+','+data.y+')'}
            >
                <g transform={'translate(0,-10)'}>
                    <text>{name}--{status}</text>
                </g>
                <polygon
                    transform={'rotate('+data.rotate+')'}
                    points="0,10 0,-10 10,0"
                    fill={
                        (status==0)?'red':((status==13|| status==5)?'yellow':'green')
                    }
                />
            </g>
        );
    }

    private getData(name: string) {
        switch (name) {
            case "2S":
                return {rotate: 0, x: "100", y: "200"};
            case "1S":
                return {rotate: 0, x: "50", y: "250"};
            case "1L":
                return {rotate: 180, x: "500", y: "250"};
            case "2L":
                return {rotate: 180, x: "500", y: "200"};
            case'PAB-1':
                return {rotate: 0, x: "-150", y: "250"};
            case'PAB-2':
                return {rotate: 0, x: "-150", y: "200"};
            default:
                return {rotate: 0, x: 0, y: 0};
        }
    }
}

