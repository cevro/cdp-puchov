"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const webSocets_1 = require("../../actions/webSocets");
class Downloader extends React.Component {
    componentDidMount() {
        this.connect();
    }
    componentDidUpdate() {
        const { messagesToSend, onSuccessSend } = this.props;
        for (const index in messagesToSend) {
            if (this.props.messagesToSend.hasOwnProperty(index)) {
                try {
                    this.ws.send(JSON.stringify(this.props.messagesToSend[index]));
                    onSuccessSend(index);
                }
                catch (e) {
                    console.log(e);
                }
            }
        }
    }
    render() {
        return React.createElement("div", { className: "list-group-item" }, this.ws && this.getStateLabel(this.ws.readyState));
    }
    getStateLabel(state) {
        switch (state) {
            case 0:
                return React.createElement("span", { className: "text-info" }, "CONNECTING...");
            case 1:
                return React.createElement("span", { className: "text-success" }, "OPEN");
            case 2:
                return React.createElement("span", { className: "text-warning" }, "CLOSING...");
            case 3:
                return React.createElement("span", { className: "text-danger" }, "CLOSED");
            default:
                return React.createElement("span", { className: "text-muted" }, "undefined");
        }
    }
    connect() {
        const url = 'ws://' + window.location.hostname + ':8081/';
        this.ws = new WebSocket(url, 'echo-protocol');
        this.ws.onmessage = ({ data }) => {
            const parsedData = JSON.parse(data);
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
const mapDispatchToProps = (dispatch) => {
    return {
        onMessage: (data) => dispatch(webSocets_1.onMessageRetrieve(data)),
        onConnectionClose: () => dispatch(webSocets_1.connectionClose()),
        onSuccessSend: (id) => dispatch(webSocets_1.successSend(id)),
    };
};
const mapStateToProps = (store) => {
    return {
        messagesToSend: store.webSocket.messages,
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Downloader);
//# sourceMappingURL=Downloader.js.map