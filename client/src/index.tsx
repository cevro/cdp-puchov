import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import WebSocketClient from './webSocetClient';


interface IMainState {
    ws: WebSocket;
    signals: Array<any>;
}
class Main extends React.Component<void, IMainState> {
    constructor() {
        super();
        this.state = {ws: null, signals: []};

    }

    componentDidMount() {
        let ws = new WebSocket('ws://localhost:8081/', 'echo-protocol');
        this.setState({ws});
        ws.onmessage = ({data}) => {
            let parsedData = JSON.parse(data);
            let isIn = false;
            let {signals} = this.state;
            signals.forEach((signal: any) => {
                if (signal.name == parsedData.name) {
                    signal = parsedData;
                    isIn = true;
                }
            });
            if (!isIn) {
                signals.push(parsedData);
            }
            this.setState({signals});
        };
    }

    render() {
        const displayNavest = (navestID: number) => {
            this.setState({displayNavest: navestID});
        };
        return (
            <div>
                <svg height="500" width="500">
                    <Signal
                        x="50"
                        y="250"
                        displayNavest={displayNavest}
                        {...
                            this.state.signals.reduce((selected: any, signal: any) => {
                                return ("118-1" == signal.name) ? signal : selected;
                            }, {})}
                    />
                    <Signal
                        x="150"
                        y="250"
                        displayNavest={displayNavest} {...
                        this.state.signals.reduce((selected: any, signal: any) => {
                            return ("119-1" == signal.name) ? signal : selected;
                        }, {})}
                    />
                    <Signal
                        x="250"
                        y="250" displayNavest={displayNavest}
                        {...
                            this.state.signals.reduce((selected: any, signal: any) => {
                                return ("1L" == signal.name) ? signal : selected;
                            }, {})}
                    />
                    <Signal
                        x="350"
                        y="250"
                        displayNavest={displayNavest} {...
                        this.state.signals.reduce((selected: any, signal: any) => {
                            return ("L1" == signal.name) ? signal : selected;
                        }, {})}
                    />
                </svg>
                <NavestDisplay navestID={this.state.displayNavest}/>
                <NavestButton ws={this.state.ws}/>

            </div>
        );
    }
}

class NavestButton extends React.Component<any,any> {
    render() {
        let signals = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        let buttons = signals.map((signal, index) => {
            const onClick = () => {
                this.props.ws.send(signal)
            };
            return (<button key={index} onClick={onClick}>{signal}</button>);
        });
        return (
            <div>
                {buttons}
            </div>
        )
    }
}
class NavestDisplay extends React.Component<any,any> {
    render() {
        let navestID = this.props.navestID;
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
        return (<svg>{HZ}{ZE}{CE}{BI}{DZ}</svg>);
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
        let {displayNavestID, navestID, name, type} = this.props;
        if (name) {

            // console.log(data);
            let status = displayNavestID == navestID;
            console.log(status);
            return (
                <g
                    transform={'translate('+this.props.x+','+this.props.y+')'}
                    className={status?'ready':'changed'}>
                    <g transform={'translate(0,-10)'}>
                        <text>{name}--{navestID}</text>
                    </g>
                    <polygon
                        onClick={()=>{this.props.displayNavest(displayNavestID)}}
                        points="0,10 0,-10 10,0"/>
                </g>
            );
        }
        else {
            return (<g/>)
        }


    }
}

ReactDOM.render(<Main/>, document.getElementsByTagName('main')[0]);

