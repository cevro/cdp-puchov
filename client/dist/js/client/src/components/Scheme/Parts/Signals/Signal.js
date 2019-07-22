"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const routeBuilder_1 = require("../../../../actions/routeBuilder");
const signalContextMenu_1 = require("../../../../actions/signalContextMenu");
const Signals_1 = require("../../../definitions/Signals");
const objectState_1 = require("../../../../middleware/objectState");
class Signal extends React.Component {
    render() {
        const { stateObject, onSignalSelect, onSignalContextMenu, displayLabel, definition: { locoNetId, name, type, SVGData: { x, y, rotate }, }, } = this.props;
        const state = stateObject ? stateObject.displayState : undefined;
        return (React.createElement("g", { className: 'signal signal-type-' + type + ' ' + this.getStateClassName(state), transform: 'translate(' + x + ',' + y + ')', onClick: () => {
                onSignalSelect(locoNetId);
            }, onContextMenu: (event) => {
                event.preventDefault();
                onSignalContextMenu(locoNetId, { x: event.pageX, y: event.pageY });
                return false;
            } },
            displayLabel && (React.createElement("g", { transform: 'translate(0,-10)' },
                React.createElement("text", null, name))),
            this.getIconByType(type, rotate)));
    }
    getIconByType(type, rotate) {
        switch (type) {
            case Signals_1.SignalTypes.TYPE_SHUNT:
                return React.createElement("polyline", { points: "0,7 7,0 0,-7", transform: 'rotate(' + rotate + ')' });
            case Signals_1.SignalTypes.TYPE_AB:
                return React.createElement(React.Fragment, null,
                    React.createElement("polyline", { points: "0,7 7,0 0,-7", transform: 'rotate(' + rotate + ')' }),
                    React.createElement("polyline", { points: "-4,7 3,0 -4,-7", transform: 'rotate(' + rotate + ')' }));
            default:
                return React.createElement("polygon", { transform: 'rotate(' + rotate + ')', points: "0,10 10,0 0,-10" });
        }
    }
    getStateClassName(state) {
        if (state === undefined || state === -1) {
            return 'state-undefined';
        }
        switch (state) {
            case 0:
                return 'state-not-allowed';
            case 13:
                return 'state-off';
            case 5:
                return 'state-lockout';
            case 9:
            case 10:
                return 'state-shift';
            default:
                return 'state-allowed';
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        stateObject: objectState_1.getSignal(state, ownProps.definition.locoNetId),
        displayLabel: !!state.displayOptions.signals[ownProps.definition.type],
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSignalSelect: (id) => dispatch(routeBuilder_1.signalSelect(id)),
        onSignalContextMenu: (id, coordinates) => dispatch(signalContextMenu_1.onSignalContextMenu(id, coordinates)),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Signal);
//# sourceMappingURL=Signal.js.map