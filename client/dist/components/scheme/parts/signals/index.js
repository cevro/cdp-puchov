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
const signal_1 = require("./signal");
class Signals extends React.Component {
    render() {
        const { signals } = this.props;
        const objects = [];
        for (let signalID in signals) {
            if (signals.hasOwnProperty(signalID)) {
                objects.push(React.createElement("g", { key: signalID },
                    React.createElement(signal_1.default, __assign({}, signals[signalID]))));
            }
        }
        return (React.createElement("g", null, objects));
    }
}
const mapStateToProps = (state, ownProps) => {
    return __assign({}, ownProps, { signals: state.signals });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, null)(Signals);
//# sourceMappingURL=index.js.map