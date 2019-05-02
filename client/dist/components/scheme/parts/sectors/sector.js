"use strict";
const React = require("react");
const STATUS_FREE = 1;
const STATUS_BUSY = 0;
const STATUS_IN_VC = 2;
const STATUS_IN_PC = 3;
const STATUS_VYLUKA = 4;
class Sector extends React.Component {
    render() {
        let { name, status, busy, SVGData } = this.props;
        let statusColor = this.getStatusColor(status);
        return (React.createElement("g", { className: busy ? 'busy' : 'free', transform: 'translate(' + SVGData.px + ',' + SVGData.py + ')' }, SVGData.points.map((points, index) => {
            return (React.createElement("polyline", { stroke: statusColor, key: index, points: points }));
        })));
    }
    getStatusColor(status) {
        switch (status) {
            case STATUS_FREE: {
                return '#ddd';
            }
            case STATUS_BUSY: {
                return '#f00';
            }
            case STATUS_IN_VC: {
                return '#0f0';
            }
            case STATUS_IN_PC: {
                return '#fff';
            }
            case STATUS_VYLUKA: {
                return '#ff0';
            }
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Sector;
//# sourceMappingURL=sector.js.map