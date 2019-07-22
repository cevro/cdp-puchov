"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ABSector_1 = require("./ABSector");
class ABSectors extends React.Component {
    render() {
        return (React.createElement("g", null, this.props.autoBlockSectors.map((sector, key) => {
            return React.createElement("g", { key: key },
                React.createElement(ABSector_1.default, { definition: sector }));
        })));
    }
}
exports.default = ABSectors;
//# sourceMappingURL=Index.js.map