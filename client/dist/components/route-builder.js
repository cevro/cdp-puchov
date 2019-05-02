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
const webSocet_1 = require("../middleware/webSocet");
const route_builder_1 = require("../actions/route-builder");
const route_destroyer_1 = require("./route-destroyer");
class RouteBuilder extends React.Component {
    constructor() {
        super();
        this.state = { availableRoutes: [] };
    }
    componentWillReceiveProps(nextProps) {
        const { signalFrom, signalTo, availableRoutes } = nextProps;
        if (signalTo && signalFrom) {
            const routes = availableRoutes.filter((route) => {
                return route.signalTo == signalTo && route.signalFrom == signalFrom;
            });
            this.setState({ availableRoutes: routes });
        }
    }
    render() {
        const { sendMessage, onClearSelect } = this.props;
        const { availableRoutes } = this.state;
        const objects = availableRoutes.map((route) => {
            const { id } = route;
            const buildClick = () => {
                if (window.confirm('postaviť' + id)) {
                    this.setState({ availableRoutes: [] });
                    onClearSelect();
                    sendMessage({ type: 'cesta', name: id, act: 'build' });
                }
            };
            return (React.createElement("p", { key: id, className: "row" },
                React.createElement("button", { onClick: () => {
                        buildClick();
                    }, className: "col-6 btn btn-success" },
                    id,
                    " -Build!")));
        });
        return (React.createElement("div", null,
            objects,
            React.createElement("p", null,
                React.createElement("button", { onClick: () => onClearSelect(), className: "btn btn-warning" }, "Clear")),
            React.createElement(route_destroyer_1.default, null)));
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return __assign({}, ownProps, { sendMessage: (data) => webSocet_1.sendMessage(dispatch, data), onClearSelect: () => dispatch(route_builder_1.clearSelect()) });
};
const mapStateToProps = (state, ownProps) => {
    return __assign({}, ownProps, { signalFrom: state.routeBuilder.signalFrom, signalTo: state.routeBuilder.signalTo, availableRoutes: state.routeBuilder.availableRoutes });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(RouteBuilder);
//# sourceMappingURL=route-builder.js.map