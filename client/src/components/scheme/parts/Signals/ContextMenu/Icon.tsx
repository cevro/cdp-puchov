import * as React from 'react';
import { SignalDefinition } from '../../../../definitions/Signals';

interface Props {
    signal: SignalDefinition,
    state: number;
}

export default class Icon extends React.Component<Props, {}> {
    render() {
        const {signal: {lights}, state} = this.props;
        const height = (lights.length * 30);
        return (<svg viewBox="0 0 80 400">
            <g>
                <rect height={400} width={80} fill="dodgerblue"/>
                <g transform="translate(10,10)">
                    <polygon
                        points={'15,0,45,0 60,5 60,' + (height + 25) + ' 45,' + (height + 30) + ' 15,' + (height + 30) + ' 0,' + (height + 25) + ' 0,5'}
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
                            className={this.getColorCallBack(value)(state)}/>
                    })}
                </g>
            </g>
        </svg>)
    }

    private getColorById(type: string): string {
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
        }
    }

    private getColorCallBack(type: string) {
        return (state: number): string => {
            switch (type) {
                case 'HZ':
                    return this.getYellowTop(state);
                case 'Z':
                    return this.getGreen(state);
                case 'C':
                    return this.getRed(state);
                case 'B':
                    return this.getWhite(state);
                case 'DZ':
                    return this.getYellowBottom(state);
                case 'X':
                    return 'signal-light off';
            }
        };
    }

    private getYellowTop(state: number): string {
        switch (state) {
            case 2:
            case 5:
            case 6:
            case 12:
            case 15:
                return 'signal-light';
            case 3:
            case 7:
            case 14:
                return 'signal-light blink';
            default:
                return 'signal-light off';

        }
    }

    private getGreen(state: number): string {
        switch (state) {
            case 1:
            case 4:
            case 5:
            case 11:
                return 'signal-light';
            default:
                return 'signal-light off';
        }
    }

    private getRed(state: number): string {
        switch (state) {
            case 0:
            case 5:
            case 8:
            case 10:
                return 'signal-light';
            default:
                return 'signal-light off';
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
                return 'signal-light';
            case 8:
                return 'signal-light blink';
            default:
                return 'signal-light off';
        }
    }

    private getYellowBottom(state: number): string {
        switch (state) {
            case 4:
            case 6:
            case 5:
            case 7:
            case 15:
                return 'signal-light';
            default:
                return 'signal-light off';
        }
    }
}
