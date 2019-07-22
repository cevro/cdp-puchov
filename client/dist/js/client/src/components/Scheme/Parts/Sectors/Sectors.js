"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Sector_1 = require("./Sector");
class Sectors extends React.Component {
    render() {
        const { sectors } = this.props;
        return (React.createElement("g", null, sectors.map((sector, id) => {
            return React.createElement("g", { key: id },
                React.createElement(Sector_1.default, { definition: sector }));
        })));
    }
}
exports.default = Sectors;
//# sourceMappingURL=Sectors.js.map