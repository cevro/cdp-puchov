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
const route_builder_1 = require("../../../../actions/route-builder");
const signal_context_menu_1 = require("../../../../actions/signal-context-menu");
class Signal extends React.Component {
    render() {
        const { name, status, busy, onSignalSelect, signalFrom, signalTo, onSignalContextMenu, SVGData: { x, y, rotate }, } = this.props;
        return (React.createElement("g", { transform: 'translate(' + x + ',' + y + ')', onClick: () => {
                onSignalSelect(name);
            }, onContextMenu: (event) => {
                event.preventDefault();
                onSignalContextMenu({ x: event.clientX, y: event.clientY, id: name });
                return false;
            } },
            React.createElement("g", { transform: 'translate(0,-10)' },
                React.createElement("text", null, name)),
            React.createElement("polygon", { className: (busy ? 'busy' : 'free') + ' ' + ((signalFrom === name || signalTo === name) ? 'selected' : ''), transform: 'rotate(' + rotate + ')', points: "0,8 0,-8 8,0", fill: (status === 0) ? 'red' : ((status === undefined || status === 13 || status === 5) ? 'yellow' : 'green') })));
    }
}
const mapStateToProps = (state, ownProps) => {
    return __assign({}, ownProps, { signalFrom: state.routeBuilder.signalFrom, signalTo: state.routeBuilder.signalTo });
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return __assign({}, ownProps, { onSignalSelect: (id) => dispatch(route_builder_1.signalSelect(id)), onSignalContextMenu: (data) => dispatch(signal_context_menu_1.singalContextMenuDisplay(data)) });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Signal);
//# sourceMappingURL=signal.js.map