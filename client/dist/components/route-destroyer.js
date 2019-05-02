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
class RouteDestroyer extends React.Component {
    render() {
        const { sendMessage, routes } = this.props;
        return (React.createElement("div", null, Object.keys(routes).map((key) => routes[key]).filter((route) => {
            return route.active && !route.busy;
        }).map((route) => {
            const downClick = () => {
                sendMessage({ type: 'cesta', name: route.name, act: 'hard_down' });
            };
            return (React.createElement("div", { className: "mb-3" },
                React.createElement("span", null, route.name),
                React.createElement("button", { onClick: () => downClick(), className: "btn btn-danger" }, "zru\u0161!")));
        })));
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return __assign({}, ownProps, { sendMessage: (data) => webSocet_1.sendMessage(dispatch, data) });
};
const mapStateToProps = (state, ownProps) => {
    return __assign({}, ownProps, { routes: state.routes });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(RouteDestroyer);
/*
 };*/ 
//# sourceMappingURL=route-destroyer.js.map