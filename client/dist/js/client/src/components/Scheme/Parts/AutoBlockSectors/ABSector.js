"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const objectState_1 = require("../../../../middleware/objectState");
class ABSector extends React.Component {
    render() {
        const { stateObject, } = this.props;
        const x = 10;
        const y = 10;
        const active = stateObject ? stateObject.active : undefined;
        const error = stateObject ? stateObject.errorCode : undefined;
        const state = stateObject ? stateObject.state : undefined;
        const ABCondition = stateObject ? stateObject.fullBlockConditionActive : undefined;
        return (React.createElement("g", { className: 'AB-sector', transform: 'translate(' + x + ',' + y + ')' },
            React.createElement("g", { transform: 'translate(-50,0)' },
                React.createElement("g", { transform: 'translate(0,-15)' },
                    React.createElement("text", { fill: "white" }, "active"),
                    React.createElement("circle", { r: "5", cx: 50, fill: active ? 'green' : 'gray' })),
                React.createElement("g", { transform: 'translate(0,0)' },
                    React.createElement("text", { fill: "white" }, "error"),
                    React.createElement("circle", { r: "5", cx: 50, className: 'AB-sector-error ' + this.getErrorClassName(error) })),
                React.createElement("g", { transform: 'translate(0,15)' },
                    React.createElement("text", { fill: "white" }, "state"),
                    React.createElement("circle", { r: "5", cx: 50, className: 'AB-sector-state ' + this.getStateClassName(state) })),
                React.createElement("g", { transform: 'translate(0,30)' },
                    React.createElement("text", { fill: "white" }, "AB"),
                    React.createElement("text", { fill: "white" }, ABCondition)))));
    }
    getErrorClassName(state) {
        if (state === undefined) {
            return 'undefined';
        }
        switch (state) {
            case -1:
                return 'undefined';
            case 0:
                return 'no-error';
            default:
                return 'has-error';
        }
    }
    getStateClassName(state) {
        if (state === undefined) {
            return 'undefined';
        }
        switch (state) {
            case -1:
                return 'undefined';
            case 1:
                return 'occupied';
            case 2:
                return 'free';
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        stateObject: objectState_1.getABSectorState(state, ownProps.definition.locoNetId),
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    // onPointClick: (id) => null,// dispatch(signalSelect(id)),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ABSector);
//# sourceMappingURL=ABSector.js.map