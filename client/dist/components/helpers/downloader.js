"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require("react");
const react_redux_1 = require("react-redux");
const webSocetClient_1 = require("../../webSocetClient");
const webSocets_1 = require("../../actions/webSocets");
const route_builder_1 = require("../../actions/route-builder");
class Downloader extends React.Component {
    componentDidMount() {
        webSocetClient_1.ws.onmessage = ({ data }) => {
            const parsedData = JSON.parse(data);
            console.log(data);
            const { type } = parsedData;
            switch (type) {
                case 'message':
                    const { onMessage } = this.props;
                    onMessage(parsedData);
                    break;
                case 'cesta':
                    const { onRoute } = this.props;
                    onRoute(parsedData);
                    break;
                case 'signal':
                    const { onSignal } = this.props;
                    onSignal(parsedData);
                    break;
                case 'obvod':
                    const { onSector } = this.props;
                    onSector(parsedData);
                    break;
                case 'available_routes':
                    const { onRegisterAvailableRoutes } = this.props;
                    onRegisterAvailableRoutes(parsedData.routes);
                    break;
                default:
                    console.log('no match');
            }
        };
    }
    render() {
        return null;
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return __assign({}, ownProps, { onMessage: (data) => dispatch(webSocets_1.onMessageRetrieve(data)), onRoute: (data) => dispatch(webSocets_1.onRouteRetrieve(data)), onSignal: (data) => dispatch(webSocets_1.onSignalRetrieve(data)), onSector: (data) => dispatch(webSocets_1.onSectorRetrieve(data)), onRegisterAvailableRoutes: (routes) => dispatch(route_builder_1.registerRoutes(routes)) });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(null, mapDispatchToProps)(Downloader);
//# sourceMappingURL=downloader.js.map