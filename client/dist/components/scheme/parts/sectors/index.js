"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require("react");
const react_redux_1 = require("react-redux");
const sector_1 = require("./sector");
class Sectors extends React.Component {
    render() {
        const { sectors } = this.props;
        const objects = [];
        for (let sectorID in sectors) {
            if (sectors.hasOwnProperty(sectorID)) {
                objects.push(React.createElement("g", { key: sectorID },
                    React.createElement(sector_1.default, __assign({}, sectors[sectorID]))));
            }
        }
        return (React.createElement("g", null, objects));
    }
}
const mapStateToProps = (state, ownProps) => {
    return __assign({}, ownProps, { sectors: state.sectors });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, null)(Sectors);
//# sourceMappingURL=index.js.map