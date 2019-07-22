"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const displayOptions_1 = require("../../actions/displayOptions");
const Signals_1 = require("../definitions/Signals");
class Options extends React.Component {
    render() {
        const { displayState } = this.props;
        return (React.createElement("div", { className: "card-body row" },
            React.createElement("div", { className: "col-6" },
                React.createElement("h6", null, "Toggle label on signals"),
                Signals_1.SignalTypes.getAllTypes().map((type) => {
                    return React.createElement("div", { className: "row", key: type },
                        React.createElement("button", { className: "btn btn-link", onClick: () => {
                                this.props.onToggleSignal(type);
                            } },
                            React.createElement("span", { className: displayState.signals[type] ? 'text-success fa fa-check-square-o' : 'text-danger fa fa-square-o' }),
                            React.createElement("span", { className: 'ml-3 badge signal-badge-' + type }, Signals_1.SignalTypes.getLabel(type))));
                })),
            React.createElement("div", { className: "col-6" },
                React.createElement("div", { className: "row" },
                    React.createElement("button", { className: "btn btn-link", onClick: () => {
                            this.props.onToggleTurnouts();
                        } },
                        React.createElement("span", { className: displayState.points ? 'text-success fa fa-check-square-o' : 'text-danger fa fa-square-o' }),
                        React.createElement("span", { className: 'ml-3 badge badge-secondary' }, "toggle turnouts on"))))));
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onToggleSignal: (type) => dispatch(displayOptions_1.toggleSignalText(type)),
        onToggleTurnouts: () => dispatch(displayOptions_1.toggleTurnoutText()),
    };
};
const mapStateToProps = (state) => {
    return {
        displayState: state.displayOptions,
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Options);
//# sourceMappingURL=Options.js.map