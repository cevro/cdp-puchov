import * as React from 'react';
import { SignalTypes } from '../../../../definitions/Signals';
import { SignalLightDisplay } from '../../../../../middleware/signal';
import { SignalFrontEndDefinition } from '../../../../../definition/all';

interface Props {
    signal: SignalFrontEndDefinition,
    state: number;
}

export default class Icon extends React.Component<Props, {}> {

    private readonly SVG_HEIGHT = 200;

    public render() {
        const {signal: {type, construction}} = this.props;

        return (<svg viewBox={(-this.SVG_HEIGHT / 2) + ' 0 ' + this.SVG_HEIGHT + ' 400'} height="300">
            <rect x={-this.SVG_HEIGHT / 2} height={400} width={this.SVG_HEIGHT} fill="dodgerblue"/>
            <g className={'signal-preview signal-type-' + type}>
                <g transform={(construction === 'T') ? 'translate(0,75)' : 'translate(0,10)'}>
                    {this.getBackground()}
                    {this.getShield()}
                    {this.getLights()}
                    {this.getLabel()}
                    {this.getStage()}
                </g>
            </g>
        </svg>)
    }

    private getStage(): JSX.Element {
        const {signal: {construction, type}} = this.props;
        const shieldHeight = this.getShieldHeight();
        switch (construction) {
            case 'T':
                return <g transform={'translate(15,' + (shieldHeight - 50) + ')'}>
                    <g transform={'translate(5,0)'}>
                        {this.getSmallStageLabel()}
                    </g>
                </g>;
            case 'K':
                return <g transform={'translate(30,' + (shieldHeight - 100) + ')'}>
                    <g transform={'translate(5,0)'}>
                        {this.getStageLabel(type)}
                    </g>
                </g>;
            default:
                return <g transform={'translate(0,' + (shieldHeight + 15) + ')'}>
                    <rect x={-4} y={0} width={8} height={300} fill={'#555'}/>
                    <g transform={'translate(0,45)'}>
                        {this.getStageLabel(type)}
                    </g>
                </g>;
        }
    }

    private getBackground() {
        const {signal: {construction}} = this.props;
        switch (construction) {
            case 'T':
                return (<>
                    <rect x={-this.SVG_HEIGHT / 2} width={this.SVG_HEIGHT} height="400"
                          y={(this.getShieldHeight() + 15 + 30)}
                          fill="green"
                    />
                    <polygon points={'-10,0 10,0 15,30 -15,30'}
                             transform={'translate(0,' + (this.getShieldHeight() + 15) + ')'}
                             fill="#ccc"
                    />
                </>);
            case 'K':
                return (<>
                    <rect x={-this.SVG_HEIGHT / 2} width={this.SVG_HEIGHT} height="50"
                          y={(this.getShieldHeight() - 45)}
                          fill={'#ccc'}
                          opacity={0.5}
                    />
                    <rect x={-this.SVG_HEIGHT / 2} width={this.SVG_HEIGHT} height="5"
                          y={this.getShieldHeight() - 95}
                          fill={'#ccc'}
                    />
                    <rect x={-this.SVG_HEIGHT / 2} width={this.SVG_HEIGHT} height="5"
                          y={this.getShieldHeight() + 5}
                          fill={'#ccc'}
                    />
                    <line x1={50}
                          x2={-50}
                          y1={this.getShieldHeight() - 95}
                          y2={this.getShieldHeight() + 5}
                          strokeWidth={5}
                          stroke={'#ccc'}/>
                    <line x1={-150}
                          x2={-50}
                          y1={this.getShieldHeight() - 95}
                          y2={this.getShieldHeight() + 5}
                          strokeWidth={5}
                          stroke={'#ccc'}/>
                    <line x1={50}
                          x2={150}
                          y1={this.getShieldHeight() - 95}
                          y2={this.getShieldHeight() + 5}
                          strokeWidth={5}
                          stroke={'#ccc'}/>
                </>);
            default:
                return null;

        }
    }

    private getLabel(): JSX.Element {
        const {signal: {name}} = this.props;
        return <g className={'label'} transform={'translate(0,' + (this.getShieldHeight()) + ')'}>
            <rect x="-15" y={0} width="30" height="15"/>
            <text transform="translate(0,10)">{name}</text>
        </g>

    }

    private getShieldHeight(): number {
        const {signal: {lights, construction}} = this.props;
        if (construction === 'T') {
            return (lights.length * 30) + 15;
        }
        return (lights.length * 30) + 30;
    }

    private getShield(): JSX.Element {
        const {signal: {construction, lights}} = this.props;
        const height = this.getShieldHeight();
        switch (construction) {
            case 'T':
                return <>
                    <polygon
                        points={
                            '-15,15' +
                            ' 15,15' +
                            ' 15,' + (height + 15) +
                            ' -15,' + (height + 15)
                        }
                        fill="black"/>
                    {lights.map((value, index) => {
                        return <line key={index}
                                     x1={-15}
                                     x2={15}
                                     y1={(index * 30) + 45}
                                     y2={(index * 30) + 45}
                                     stroke={'#666'}
                                     strokeWidth={1}/>
                    })}</>;
            default:
                return <>
                    <polygon
                        points={
                            '-15,0' +
                            ' 15,0' +
                            ' 30,5' +
                            ' 30,' + (height - 5) +
                            ' 15,' + (height) +
                            ' -15,' + (height) +
                            ' -30,' + (height - 5) +
                            ' -30,5'
                        }
                        fill="black"/>
                    <line x1={-15} x2={-15} y1={15} y2={height - 15} stroke={'#666'} strokeWidth={1}/>
                    <line x1={15} x2={15} y1={15} y2={height - 15} stroke={'#666'} strokeWidth={1}/>
                    <line x1={-30} x2={30} y1={15} y2={15} stroke={'#666'} strokeWidth={1}/>

                    {lights.map((value, index) => {
                        return <line key={index}
                                     x1={-30}
                                     x2={30}
                                     y1={(index * 30) + 45}
                                     y2={(index * 30) + 45}
                                     stroke={'#666'}
                                     strokeWidth={1}/>
                    })}</>

        }
    }

    private getLights(): JSX.Element {
        const {signal: {lights}, state} = this.props;
        return <>{lights.map((value, index) => {
            return <circle
                key={index}
                cx="0" cy={(index * 30) + 30}
                r="10"
                fill={SignalLightDisplay.getColorById(value)}
                className={SignalLightDisplay.getColorCallBack(value, state)}/>
        })}</>;
    }

    private getSmallStageLabel(): JSX.Element {
        const {signal: {type}} = this.props;
        const width = 10;
        switch (type) {
            case SignalTypes.TYPE_ENTRY:
                return <g>
                    <rect x={-width / 2} y={0} width={width} height={25} fill={'white'}/>
                    <rect x={-width / 2} y={25} width={width} height={25} fill={'red'}/>
                </g>;
            case SignalTypes.TYPE_PATH:
            case SignalTypes.TYPE_EXIT:
                return <g/>;
            /*  <rect x={0} y={0} width={width} height={26} fill={'red'}/>
              <rect x={0} y={26} width={width} height={11} fill={'white'}/>
              <rect x={0} y={37} width={width} height={26} fill={'red'}/>
              <rect x={0} y={63} width={width} height={11} fill={'white'}/>
              <rect x={0} y={74} width={width} height={26} fill={'red'}/>
          </g>;*/
            case SignalTypes.TYPE_SHUNT:
                return <g>
                    <rect x={-width / 2} y={0} width={width} height={25} fill={'white'}/>
                    <rect x={-width / 2} y={25} width={width} height={25} fill={'blue'}/>
                </g>;
            case SignalTypes.TYPE_AUTOBLOCK:
                return <g>
                    <rect x={-width / 2} y={0} width={width} height={50} fill={'white'}/>
                </g>;
        }
    }

    private getStageLabel(type: number): JSX.Element {
        const width = 10;
        switch (type) {
            case SignalTypes.TYPE_ENTRY:
                return <g>
                    <rect x={-width / 2} y={0} width={width} height={25} fill={'white'}/>
                    <rect x={-width / 2} y={25} width={width} height={25} fill={'red'}/>
                    <rect x={-width / 2} y={50} width={width} height={25} fill={'white'}/>
                    <rect x={-width / 2} y={75} width={width} height={25} fill={'red'}/>
                </g>;
            case SignalTypes.TYPE_PATH:
            case SignalTypes.TYPE_EXIT:
                return <g>
                    <rect x={-width / 2} y={0} width={width} height={26} fill={'red'}/>
                    <rect x={-width / 2} y={26} width={width} height={11} fill={'white'}/>
                    <rect x={-width / 2} y={37} width={width} height={26} fill={'red'}/>
                    <rect x={-width / 2} y={63} width={width} height={11} fill={'white'}/>
                    <rect x={-width / 2} y={74} width={width} height={26} fill={'red'}/>
                </g>;
            case SignalTypes.TYPE_SHUNT:
                return <g>
                    <rect x={-width / 2} y={0} width={width} height={25} fill={'white'}/>
                    <rect x={-width / 2} y={25} width={width} height={25} fill={'blue'}/>
                    <rect x={-width / 2} y={50} width={width} height={25} fill={'white'}/>
                    <rect x={-width / 2} y={75} width={width} height={25} fill={'blue'}/>
                </g>;
            case SignalTypes.TYPE_AUTOBLOCK:
                return <g>
                    <rect x={-width / 2} y={0} width={width} height={100} fill={'white'}/>
                </g>;
        }
    }
}
