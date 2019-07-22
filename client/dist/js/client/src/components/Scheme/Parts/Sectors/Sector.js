"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const objectState_1 = require("../../../../middleware/objectState");
const routeBuilder_1 = require("../../../../actions/routeBuilder");
const SectorsPreview_1 = require("../../../MessageBox/SectorsPreview");
class Sector extends React.Component {
    render() {
        let { definition: { SVGData, id, name }, stateObject, onSectorClick } = this.props;
        return (React.createElement("g", { className: 'sector ' + this.getStatusClassName(stateObject), onClick: () => {
                onSectorClick(id);
            } },
            SVGData.points.map((points, index) => {
                return (React.createElement("polyline", { key: index, points: points }));
            }),
            SVGData.label &&
                React.createElement("g", { transform: 'translate(' + (SVGData.label.x) + ',' + (SVGData.label.y) + ')' },
                    React.createElement("rect", { x: "-20", width: "40", y: "-10", height: "20", fill: "black" }),
                    React.createElement("text", { textAnchor: "middle", alignmentBaseline: "middle" }, name))));
    }
    getStatusClassName(stateObject) {
        if (!stateObject) {
            return 'undefined';
        }
        switch (stateObject.state) {
            case SectorsPreview_1.SECTOR_STATE_FREE:
                if (stateObject.locked) {
                    return 'in-train-route';
                }
                return 'free';
            case SectorsPreview_1.SECTOR_STATE_OCCUPIED:
                return 'used';
            default:
                return 'undefined';
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        stateObject: objectState_1.getSectorState(state, ownProps.definition.id),
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSectorClick: (id) => dispatch(routeBuilder_1.sectorSelect(id)),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Sector);
//# sourceMappingURL=Sector.js.map