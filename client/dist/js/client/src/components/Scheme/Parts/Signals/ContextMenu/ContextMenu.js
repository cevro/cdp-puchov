"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Icon_1 = require("./Icon");
const objectState_1 = require("../../../../../middleware/objectState");
const react_redux_1 = require("react-redux");
const signalContextMenu_1 = require("../../../../../actions/signalContextMenu");
class ContextMenu extends React.Component {
    render() {
        const { id, stateObject, coordinates, active, onCloseContext } = this.props;
        const state = stateObject ? stateObject.displayState : undefined;
        const signal = this.props.signals.filter((signal) => {
            return signal.locoNetId === id;
        })[0];
        if (!active) {
            return null;
        }
        return (React.createElement("div", { className: "signal-context-menu", style: {
                position: 'absolute',
                left: coordinates.x,
                top: coordinates.y,
            } }, signal ? (React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "card-header" },
                React.createElement("span", { className: 'badge signal-badge-' + signal.type }, signal.name),
                React.createElement("button", { type: "button", className: "close", "aria-label": "Close", onClick: () => {
                        onCloseContext();
                    } },
                    React.createElement("span", { "aria-hidden": "true" }, "\u00D7"))),
            React.createElement("div", null,
                React.createElement("div", { className: "text-center py-1", style: { maxHeight: '100%' } },
                    React.createElement(Icon_1.default, { state: state, signal: signal }))))) : null));
    }
}
const mapStateToProps = (state) => {
    return {
        id: state.signalContextMenu.id,
        active: state.signalContextMenu.active,
        coordinates: state.signalContextMenu.coordinates,
        stateObject: objectState_1.getSignal(state, state.signalContextMenu.id),
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onCloseContext: () => dispatch(signalContextMenu_1.closeContextMenu()),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ContextMenu);
//# sourceMappingURL=ContextMenu.js.map