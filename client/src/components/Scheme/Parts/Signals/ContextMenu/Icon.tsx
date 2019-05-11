import * as React from 'react';
import {
    SignalDefinition,
    signalLight,
} from '../../../../definitions/Signals';

interface Props {
    signal: SignalDefinition,
    state: number;
}

export default class Icon extends React.Component<Props, {}> {
    public render() {
        const {signal: {lights, name, type}, state} = this.props;
        const height = (lights.length * 30);
        return (<svg viewBox="0 0 80 400" height="300">

            <g className={'signal-preview signal-type-' + type}>
                <rect height={400} width={80} fill="dodgerblue"/>
                <g transform="translate(10,10)">
                    <polygon
                        points={'15,0,45,0 60,5 60,' + (height + 25) +
                        ' 45,' + (height + 30) +
                        ' 15,' + (height + 30) +
                        ' 0,' + (height + 25) +
                        ' 0,5'}
                        fill="black"/>
                    <line x1={15} x2={15} y1={15} y2={height + 15} stroke={'#666'} strokeWidth={1}/>
                    <line x1={45} x2={45} y1={15} y2={height + 15} stroke={'#666'} strokeWidth={1}/>

                    <line x1={0} x2={60} y1={15} y2={15} stroke={'#666'} strokeWidth={1}/>
                    {lights.map((value, index) => {
                        return <line key={index}
                                     x1={0}
                                     x2={60}
                                     y1={(index * 30) + 45}
                                     y2={(index * 30) + 45}
                                     stroke={'#666'}
                                     strokeWidth={1}/>
                    })}
                    {lights.map((value, index) => {
                        return <circle
                            key={index}
                            cx="30" cy={(index * 30) + 30}
                            r="10"
                            fill={this.getColorById(value)}
                            className={this.getColorCallBack(value, state)}/>
                    })}
                    <g className={'label'} transform={'translate(0,' + (height + 30) + ')'}>
                        <rect x="15" y={0} width="30" height="15"/>
                        <text transform="translate(30,10)">{name}</text>
                    </g>
                    <g transform={'translate(0,' + (height + 45) + ')'}>
                        <rect x={26} y={0} width={8} height={300} fill={'#555'}/>
                        <g transform={'translate(25,45)'}>
                            {this.getStageLabel(type)}
                        </g>
                    </g>
                </g>
            </g>
        </svg>)
    }

    private getStageLabel(type: number): JSX.Element {
        const width = 10;
        switch (type) {
            case 1:
                return <g>
                    <rect x={0} y={0} width={width} height={25} fill={'white'}/>
                    <rect x={0} y={25} width={width} height={25} fill={'red'}/>
                    <rect x={0} y={50} width={width} height={25} fill={'white'}/>
                    <rect x={0} y={75} width={width} height={25} fill={'red'}/>
                </g>;
            case 2:
            case 3:
                return <g>
                    <rect x={0} y={0} width={width} height={26} fill={'red'}/>
                    <rect x={0} y={26} width={width} height={11} fill={'white'}/>
                    <rect x={0} y={37} width={width} height={26} fill={'red'}/>
                    <rect x={0} y={63} width={width} height={11} fill={'white'}/>
                    <rect x={0} y={74} width={width} height={26} fill={'red'}/>
                </g>;
            case 4:
                return <g>
                    <rect x={0} y={0} width={width} height={25} fill={'white'}/>
                    <rect x={0} y={25} width={width} height={25} fill={'blue'}/>
                    <rect x={0} y={50} width={width} height={25} fill={'white'}/>
                    <rect x={0} y={75} width={width} height={25} fill={'blue'}/>
                </g>;
        }

    }

    private getColorById(type: signalLight): string {
        switch (type) {
            case 'HZ':
            case 'DZ':
                return 'yellow';
            case 'Z':
                return 'green';
            case 'C':
                return 'red';
            case 'B':
                return 'white';
            case 'X':
                return 'black';
            case 'M':
                return 'blue';
        }
    }

    private getColorCallBack(type: signalLight, state: number): string {
        const className = 'signal-light ';
        switch (type) {
            case 'HZ':
                return className + this.getYellowTop(state);
            case 'Z':
                return className + this.getGreen(state);
            case 'C':
            case 'M':
                return className + this.getRed(state);
            case 'B':
                return className + this.getWhite(state);
            case 'DZ':
                return className + this.getYellowBottom(state);
            case 'X':
                return className + 'off';
        }
    }

    private getYellowTop(state: number): string {
        switch (state) {
            case 2:
            case 5:
            case 6:
            case 12:
            case 15:
                return 'flash';
            case 3:
            case 7:
            case 14:
                return 'blink';
            default:
                return 'off';
        }
    }

    private getGreen(state: number): string {
        switch (state) {
            case 1:
            case 4:
            case 5:
            case 11:
                return 'flash';
            default:
                return 'off';
        }
    }

    private getRed(state: number): string {
        switch (state) {
            case 0:
            case 5:
            case 8:
            case 10:
                return 'flash';
            default:
                return 'off';
        }
    }

    private getWhite(state: number): string {
        switch (state) {
            case 5:
            case 9:
            case 10:
            case 11:
            case 12:
            case 14:
            case 15:
                return 'flash';
            case 8:
                return 'blink';
            default:
                return 'off';
        }
    }

    private getYellowBottom(state: number): string {
        switch (state) {
            case 4:
            case 6:
            case 5:
            case 7:
            case 15:
                return 'flash';
            default:
                return 'off';
        }
    }
}
