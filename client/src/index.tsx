import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import WebSocketClient from './webSocetClient';

import Signal from './Signal';
import Obvod from './obvod';

const ws = new WebSocket('ws://localhost:8081/', 'echo-protocol');

interface IMainState {
    data: Array<any>;
    displaySignal: any;
    messages: Array<any>;
    availableCesty: Array<any>;
}
class Main extends React.Component<void, IMainState> {
    constructor() {
        super();
        this.state = {data: [], displaySignal: {}, messages: [], availableCesty: []};

    }

    componentDidMount() {

        ws.onmessage = ({data}) => {
            let parsedData = JSON.parse(data);
            console.log(data);
            if (parsedData.type == 'message') {

                let {messages} = this.state;

                let newMessage = [...messages, parsedData];
                if (newMessage.length > 20) {
                    newMessage.shift();
                }
                this.setState({messages: newMessage});
                this.forceUpdate();
                return;
            }
            if (parsedData.type == 'cesta') {
                let newAavailableCesty = [...this.state.availableCesty, parsedData];
                this.setState({availableCesty: newAavailableCesty});
            }

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
        /* const displayNavest = (signal: any) => {
         this.setState({displaySignal: signal});
         };*/

        const cesty = this.state.availableCesty.map((cesta, key) => {
            let {type, name} = cesta;
            const buildClick = () => {
                ws.send(JSON.stringify({type, name, act: 'build'}));
            };
            const downClick = () => {
                ws.send(JSON.stringify({type, name, act: 'hard_down'}));
            };
            return (
                <div key={key}>{name}
                    <button onClick={()=>buildClick()}>
                        Postav!
                    </button>
                    <button onClick={()=>downClick()}>
                        zruš!
                    </button>
                </div>
            );
        });

        const objects = this.state.data.map((object, key) => {
            switch (object.type) {
                case 'signal':
                    return (
                        <Signal
                            key={key}
                            {...object}
                        />
                    );
                case 'obvod':
                    return (
                        <Obvod
                            key={key}
                            {...object}
                        />
                    );
                default:
                    return (
                        <g
                            key={key}
                        />
                    );
            }
        });
        return (
            <div>
                <svg viewBox="-300 150 1000 350" style={{width:"75%"}}>
                    {objects}
                </svg>
                <MessageBox data={this.state.messages}/>
                {cesty}
                {this.state.data.map((object, index) => {
                    return (<NavestButton
                        key={index}
                        {...object}
                        ws={this.state.ws}
                    />)
                })}
            </div>
        );
    }
}
class MessageBox extends React.Component<any,any> {
    render() {
        let msgs = this.props.data.map((message, index) => {
            let {text, lvl} = message;
            let className = (lvl == -1 ? 'error' : ((lvl == 0) ? 'info' : 'success'));
            return (<div className={'message '+ className} key={index}>
                {text}
            </div>);
        });
        return (
            <div style={{width:'25%',float:'right'}}>
                {msgs}
            </div>
        )
    }
}


class NavestButton extends React.Component<any,any> {
    render() {
        let {type, name} = this.props;
        let signals = new Array<number>();
        if (type == 'obvod') {
            signals = [0, 1];
        } else {
            //  signals = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
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

ReactDOM.render(<Main/>, document.getElementsByTagName('main')[0]);

