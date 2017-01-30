import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import WebSocketClient from './webSocetClient';

const ws = new WebSocket('ws://localhost:8081/', 'echo-protocol');

interface IMainState {
    data: Array<any>;
    displaySignal: any;
}
class Main extends React.Component<void, IMainState> {
    constructor() {
        super();
        this.state = {data: [], displaySignal: {}};

    }

    componentDidMount() {

        ws.onmessage = ({data}) => {
            let parsedData = JSON.parse(data);
            console.log(data);
            let isIn = false;

            let newData = this.state.data.map((signal: any) => {
                if (signal.name == parsedData.name) {
                    isIn = true;
                    return parsedData;
                }
                return signal;
            });
            if (!isIn) {
                newData.push(parsedData);
            }
            this.setState({data: newData});
            this.forceUpdate();
        };
    }


    render() {
        const displayNavest = (signal: any) => {
            this.setState({displaySignal: signal});
        };
        return (
            <div>
                <svg viewBox="0 0 1200 700" width="1200">
                    <Signal
                        x="50"
                        y="250"
                        displayNavest={displayNavest}
                        {...
                            this.state.data.reduce((selected: any, signal: any) => {
                                return ("118-1" == signal.name) ? signal : selected;
                            }, {})}
                    />
                    <Signal
                        x="150"
                        y="250"
                        displayNavest={displayNavest} {...
                        this.state.data.reduce((selected: any, signal: any) => {
                            return ("119-1" == signal.name) ? signal : selected;
                        }, {})}
                    />
                    <Signal
                        x="250"
                        y="250" displayNavest={displayNavest}
                        {...
                            this.state.data.reduce((selected: any, signal: any) => {
                                return ("1L" == signal.name) ? signal : selected;
                            }, {})}
                    />
                    <Obvod
                        px="250"
                        py="250"
                        points="0,0 100,0"
                        {...this.state.data.reduce((selected: any, signal: any) => {
                            return ("1SK" == signal.name) ? signal : selected;
                        }, {})}
                    />
                    <Obvod
                        px="150"
                        py="250"
                        points="0,0 100,0"
                        {...this.state.data.reduce((selected: any, signal: any) => {
                            return ("priblizovak" == signal.name) ? signal : selected;
                        }, {})}
                    />
                    <Obvod
                        px="50"
                        py="250"
                        points="0,0 100,0"
                        {...this.state.data.reduce((selected: any, signal: any) => {
                            return ("AB" == signal.name) ? signal : selected;
                        }, {})}
                    />
                    <Signal
                        x="350"
                        y="250"
                        displayNavest={displayNavest} {...
                        this.state.data.reduce((selected: any, signal: any) => {
                            return ("L1" == signal.name) ? signal : selected;
                        }, {})}
                    />
                </svg>
                <NavestDisplay {...this.state.displaySignal}/>
                <NavestButton
                    type="obvod"
                    name="1SK"
                    ws={this.state.ws}
                />
                <NavestButton
                    type="obvod"
                    name="AB"
                    ws={this.state.ws}
                />
                <NavestButton
                    type="obvod"
                    name="priblizovak"
                    ws={this.state.ws}
                />
                <NavestButton
                    type="signal"
                    name="L1"
                    ws={this.state.ws}
                />
                <NavestButton
                    type="signal"
                    name="119-1"
                    ws={this.state.ws}
                />

            </div>
        );
    }
}

class Obvod extends React.Component<any,any> {
    render() {
        return (
            <g transform={'translate('+this.props.px+','+this.props.py+')'}>
                <polyline stroke={this.props.status?'green':'red'} points={this.props.points}/>
            </g>
        );
    }
}

class NavestButton extends React.Component<any,any> {
    render() {
        let {type, name} = this.props;
        let signals = new Array<number>();
        if (type == 'obvod') {
            signals = [0, 1];
        } else {
            signals = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        }
        let buttons = signals.map((signal, index) => {
            const onClick = () => {
                ws.send(JSON.stringify({type, name, status: signal}));
            };
            return (<button key={index} onClick={onClick}>{signal}</button>);
        });
        return (
            <div>
                <span>{name}</span>
                {buttons}
            </div>
        )
    }
}
class NavestDisplay extends React.Component<any,any> {
    render() {
        let {navestID, name, type} = this.props;
        const HZ = (<circle
                r="10"
                cx="15"
                cy="15"
                fill={[3,6,12,15].indexOf(navestID)!==-1?'yellow':'black'}/>
        );
        const ZE = (<circle
                r="10"
                cx="15"
                cy="45"
                fill={[1,4,11].indexOf(navestID)!==-1?'green':'black'}/>
        );
        const CE = (<circle
                r="10"
                cx="15"
                cy="75"
                fill={[0,8,10].indexOf(navestID)!==-1?'red':'black'}/>
        );
        const BI = (<circle
                r="10"
                cx="15"
                cy="105"
                fill={[9,10,11,12,14,15,16].indexOf(navestID)!==-1?'white':'black'}/>
        );
        const DZ = (<circle
                r="10"
                cx="15"
                cy="135"
                fill={[4,6,7,15,16].indexOf(navestID)!==-1?'yellow':'black'}/>
        );
        const signalName = (
            <g transform="translate(0,160)">
                <text>{name}</text>
            </g>);
        return (
            <svg style={{backgroundColor:'transparent',}}>
                <g>
                    <rect width="30" height="150" style={{fill:'black'}}/>
                    {HZ}{ZE}{CE}{BI}{DZ}
                    {signalName}

                </g>
            </svg>
        );
    }
}


class Signal extends React.Component<any, any> {
    public constructor() {
        super();
    }

    componentWillReceiveProps(nextProps: any) {
        this.forceUpdate();
    }

    render() {
        let {status, name, type} = this.props;
        if (name) {
            console.log(status);
            return (
                <g
                    transform={'translate('+this.props.x+','+this.props.y+')'}
                >
                    <g transform={'translate(0,-10)'}>
                        <text>{name}--{status}</text>
                    </g>
                    <polygon
                        onClick={()=>{this.props.displayNavest(this.props)}}
                        points="0,10 0,-10 10,0"
                        fill={
                        (status==0)?'red':((status==13|| status==5)?'yellow':'green')
                    }
                    />
                </g>
            );
        }
        else {
            return (<g/>)
        }


    }
}

ReactDOM.render(<Main/>, document.getElementsByTagName('main')[0]);

