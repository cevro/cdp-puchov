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
class ContextMenu extends React.Component {
    render() {
        const { id, active, x, y, signal } = this.props;
        if (!active) {
            return null;
        }
        return (React.createElement("div", { className: "signal-context-menu row", style: {
                left: x + 5,
                top: y + 5
            } },
            React.createElement("div", { className: "col-7" },
                React.createElement("p", { className: 'signal-label ' + signal.signalType.toLocaleLowerCase() }, id)),
            React.createElement("div", { className: "col-5" },
                React.createElement(SignalIcon, { id: signal.status, type: signal.signalType.toLocaleLowerCase() }))));
    }
}
const mapStateToProps = (state, ownProps) => {
    return __assign({}, ownProps, state.signalsContextMenu, { signal: state.signals[state.signalsContextMenu.id] });
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return __assign({}, ownProps);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ContextMenu);
class SignalIcon extends React.Component {
    render() {
        const { id } = this.props;
        const yellowTopClassName = 'signal-light ' + ([3, 7].indexOf(id) != -1 ? 'blink' : ([0, 1, 3, 4, 7].indexOf(id) != -1 ? 'off' : ''));
        const greenClassName = 'signal-light ' + ([1, 4, 5].indexOf(id) != -1 ? '' : 'off');
        const redClassName = 'signal-light ' + ([0, 5].indexOf(id) != -1 ? '' : 'off');
        const whiteClassName = 'signal-light ' + ('off');
        const yellowBottomClassName = 'signal-light ' + ([4, 6, 7].indexOf(id) != -1 ? '' : 'off');
        return (React.createElement("svg", { viewBox: "0 0 50 200" },
            React.createElement("g", null,
                React.createElement("rect", { height: 200, width: 50, fill: "dodgerblue" }),
                React.createElement("rect", { height: 140, width: 30, transform: "translate(10,5)", fill: "black" }),
                React.createElement("circle", { cx: "25", cy: "20", r: "9", fill: "yellow", className: yellowTopClassName }),
                React.createElement("circle", { cx: "25", cy: "45", r: "9", fill: "green", className: greenClassName }),
                React.createElement("circle", { cx: "25", cy: "70", r: "9", fill: "red", className: redClassName }),
                React.createElement("circle", { cx: "25", cy: "95", r: "9", fill: "white", className: whiteClassName }),
                React.createElement("circle", { cx: "25", cy: "120", r: "9", fill: "yellow", className: yellowBottomClassName }))));
    }
}
//# sourceMappingURL=context-menu.js.map