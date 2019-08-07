import * as React from 'react';
import {connect} from 'react-redux';
import {
    connectionClose,
    onMessageRetrieve,
    successSend,
} from '@app/actions/webSocets';
import {Store} from '@app/reducers';
import {Message} from '@definitions/messages';

interface State {
    messagesToSend?: {
        [key: number]: Message;
    };

    onMessage?(data: Message<any>): void;

    onConnectionClose?(): void;

    onSuccessSend?(id: string): void;
}

class Downloader extends React.Component<State, {}> {
    private ws: WebSocket;

    public componentDidMount() {
        this.connect();
    }

    public componentDidUpdate() {
        const {messagesToSend, onSuccessSend} = this.props;
        for (const index in messagesToSend) {
            if (this.props.messagesToSend.hasOwnProperty(index)) {
                try {
                    this.ws.send(JSON.stringify(this.props.messagesToSend[index]));
                    onSuccessSend(index);
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }

    public render() {
        return <div className="fixed-bottom">
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
         const wsServer = window.location.hostname;
        // const wsServer = '192.168.1.144';
        const url = 'ws://' + wsServer + ':8081/';
        this.ws = new WebSocket(url, 'echo-protocol');
        this.ws.onmessage = ({data}) => {
            const parsedData: Message = JSON.parse(data);
            this.props.onMessage(parsedData);
        };
        this.ws.onclose = () => {
            this.props.onConnectionClose();
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
        onConnectionClose: () => dispatch(connectionClose()),
        onSuccessSend: (id) => dispatch(successSend(id)),
    };
};
const mapStateToProps = (store: Store): State => {
    return {
        messagesToSend: store.webSocket.messages,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Downloader);
