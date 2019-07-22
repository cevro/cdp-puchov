"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Signal_1 = require("./Signal");
class Signals extends React.Component {
    render() {
        return (React.createElement("g", null, this.props.signals.map((signal, signalId) => {
            return React.createElement("g", { key: signalId },
                React.createElement(Signal_1.default, { definition: signal }));
        })));
    }
}
exports.default = Signals;
//# sourceMappingURL=Signals.js.map