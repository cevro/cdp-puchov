"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const webSocets_1 = require("../../actions/webSocets");
class SignalsPreview extends React.Component {
    render() {
        const { signals, signalsState } = this.props;
        return (React.createElement("div", { className: "list-group list-scroll" }, signals.map((signalDef, index) => {
            const displayState = signalsState[signalDef.locoNetId] ? signalsState[signalDef.locoNetId].displayState : undefined;
            const requestedState = signalsState[signalDef.locoNetId] ? signalsState[signalDef.locoNetId].requestedState : undefined;
            return React.createElement("div", { className: "list-group-item", key: index },
                React.createElement("div", { className: "row" },
                    React.createElement("span", { className: "col-2" }, signalDef.locoNetId),
                    React.createElement("span", { className: "col-2" }, signalDef.name),
                    React.createElement("span", { className: "col-1" }, displayState),
                    React.createElement("span", { className: "col-1" }, requestedState),
                    React.createElement("span", { className: "col-6" },
                        React.createElement("select", { className: 'form-control', value: displayState, onChange: (e) => {
                                this.props.onChangeSignal(signalDef.locoNetId, +e.target.value);
                            } }, [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((value) => {
                            return React.createElement("option", { key: value, value: value }, value);
                        })))));
        })));
    }
}
const mapStateToProps = (state) => {
    return {
        signalsState: state.objectState.signals,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeSignal: (id, state) => webSocets_1.changeSignal(dispatch, id, state),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SignalsPreview);
//# sourceMappingURL=SignalsPreview.js.map