import * as React from 'react';
import { SignalDefinition } from '../../../../definitions/Signals';

interface Props {
    signal: SignalDefinition,
    state: number;
}

export default class Icon extends React.Component<Props, {}> {
    render() {
        const {signal, state} = this.props;
        return (<svg viewBox="0 0 80 400">
            <g>
                <rect height={400} width={80} fill="dodgerblue"/>
                <g transform="translate(10,10)">
                    <polygon points={'15,0,45,0 60,5 60,175 45,180 15,180 0,175 0,5'}
                             fill="black"/>
                    <line x1={15} x2={15} y1={15} y2={165} stroke={'#666'} strokeWidth={1}/>
                    <line x1={45} x2={45} y1={15} y2={165} stroke={'#666'} strokeWidth={1}/>

                    <line x1={0} x2={60} y1={15} y2={15} stroke={'#666'} strokeWidth={1}/>
                    <line x1={0} x2={60} y1={45} y2={45} stroke={'#666'} strokeWidth={1}/>
                    <line x1={0} x2={60} y1={75} y2={75} stroke={'#666'} strokeWidth={1}/>
                    <line x1={0} x2={60} y1={105} y2={105} stroke={'#666'} strokeWidth={1}/>
                    <line x1={0} x2={60} y1={135} y2={135} stroke={'#666'} strokeWidth={1}/>
                    <line x1={0} x2={60} y1={165} y2={165} stroke={'#666'} strokeWidth={1}/>

                    <circle cx="30" cy="30" r="10" fill="yellow" className={this.getYellowTop(state)}/>
                    <circle cx="30" cy="60" r="10" fill="green" className={this.getGreen(state)}/>
                    <circle cx="30" cy="90" r="10" fill="red" className={this.getRed(state)}/>
                    <circle cx="30" cy="120" r="10" fill="white" className={this.getWhite(state)}/>
                    <circle cx="30" cy="150" r="10" fill="yellow" className={this.getYellowBottom(state)}/>
                </g>
            </g>
        </svg>)
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
