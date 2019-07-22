"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
class LocoNetConnector extends React.Component {
    render() {
        const { locoNetConnector } = this.props;
        return (React.createElement("div", { className: "list-group list-scroll" }, locoNetConnector.avaiablePorts.map(() => { })));
    }
}
const mapStateToProps = (state) => {
    return {
        locoNetConnector: state.objectState.locoNetConnector,
    };
};
exports.default = react_redux_1.connect(mapStateToProps, null)(LocoNetConnector);
//# sourceMappingURL=LocoNetConnector.js.map