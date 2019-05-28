import * as React from 'react';
import { connect } from 'react-redux';
import { Message } from '../definitions/interfaces';
import { onMessageRetrieve } from '../../actions/webSocets';

interface State {
    onMessage?: (data: Message) => void;
    onRegisterAvailableRoutes?: (data) => void;
}

class Downloader extends React.Component<State, {}> {
    private ws: WebSocket;

    public componentDidMount() {
        this.connect();
    }


    public render() {
        return <div>
            {this.ws && this.getStateLabel(this.ws.readyState)}
        </div>;
    }

    private getStateLabel(state: number) {
        switch (state) {
            case 0:
                return <span className="text-info">CONNECTING...</span>;
            case 1:
                return <span className="text-success">OPEN</span>;
            case 2:
                return <span className="text-warning">CLOSING...</span>;
            case 3:
                return <span className="text-danger">CLOSED</span>;
            default:
                return <span className="text-muted">undefined</span>;
        }
    }

    private connect() {
        const url = 'ws://' + window.location.hostname + ':8081/';
        this.ws = new WebSocket(url, 'echo-protocol');

        this.ws.onmessage = ({data}) => {
            const parsedData: Message = JSON.parse(data);
            this.props.onMessage(parsedData);
            console.log(data);
        };
        this.ws.onclose = () => {
            this.ws.close();
            setTimeout(() => {
                this.connect();
                this.forceUpdate();
            }, 1000);
        };
        /*   this.ws.onerror = () => {
               this.ws.close();
               setTimeout(() => {
                   this.connect();
                   this.forceUpdate();
               }, 1000);
           };*/
        this.ws.onopen = () => {
            this.forceUpdate();
        };
    }
}

const mapDispatchToProps = (dispatch): State => {
    return {
        onMessage: (data) => dispatch(onMessageRetrieve(data)),
    };
};

export default connect(null, mapDispatchToProps)(Downloader);
