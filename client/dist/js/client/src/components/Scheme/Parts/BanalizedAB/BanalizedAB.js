"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const objectState_1 = require("../../../../middleware/objectState");
const webSocets_1 = require("../../../../actions/webSocets");
class BanalizedAB extends React.Component {
    render() {
        const { stateObject, definition, } = this.props;
        const dir = stateObject ? stateObject.dir : undefined;
        return (React.createElement("g", { className: 'banalized-AB', transform: 'translate(' + definition.SVDData.x + ',' + definition.SVDData.y + ')' },
            React.createElement("g", { className: 'dir-display ' + this.getDirClassName(definition.mainDir, 'L', dir) },
                React.createElement("rect", { width: 30, height: 20, x: -30, y: -10, onClick: () => {
                        this.props.onChangeDir(definition.locoNetId, (definition.mainDir === 'L') ? 1 : -1);
                    } }),
                React.createElement("polyline", { points: "-20,-10 -30,0 -20,10" }),
                React.createElement("polyline", { points: "-30,0 0,0" })),
            React.createElement("g", { className: 'dir-display ' + this.getDirClassName(definition.mainDir, 'P', dir) },
                React.createElement("rect", { width: 30, height: 20, x: 0, y: -10, onClick: () => {
                        this.props.onChangeDir(definition.locoNetId, (definition.mainDir === 'P') ? 1 : -1);
                    } }),
                React.createElement("polyline", { points: "20,-10 30,0 20,10" }),
                React.createElement("polyline", { points: "30,0 0,0" }))));
    }
    getDirClassName(mainDir, arrow, dir) {
        if (dir === undefined || dir === 0) {
            return 'undefined';
        }
        if (dir === 1) {
            return (mainDir === arrow) ? 'active' : 'inactive';
        }
        if (dir === -1) {
            return (mainDir === arrow) ? 'inactive' : 'active';
        }
        return 'undefined';
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        stateObject: objectState_1.getBiDirABState(state, ownProps.definition.locoNetId),
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeDir: (id, dir) => webSocets_1.changeABDir(dispatch, id, dir),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(BanalizedAB);
//# sourceMappingURL=BiDirAB.js.map