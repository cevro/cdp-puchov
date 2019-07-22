"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const BanalizedAB_1 = require("./BanalizedAB");
class BanalizedABs extends React.Component {
    render() {
        return (React.createElement("g", null, this.props.ABs.map((sector, key) => {
            return React.createElement("g", { key: key },
                React.createElement(BanalizedAB_1.default, { definition: sector }));
        })));
    }
}
exports.default = BanalizedABs;
//# sourceMappingURL=Index.js.map