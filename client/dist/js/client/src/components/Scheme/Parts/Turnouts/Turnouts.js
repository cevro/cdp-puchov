"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Turnout_1 = require("./Turnout");
class Turnouts extends React.Component {
    render() {
        return (React.createElement("g", null, this.props.points.map((signal, signalId) => {
            return React.createElement("g", { key: signalId },
                React.createElement(Turnout_1.default, { definition: signal }));
        })));
    }
}
exports.default = Turnouts;
//# sourceMappingURL=Turnouts.js.map