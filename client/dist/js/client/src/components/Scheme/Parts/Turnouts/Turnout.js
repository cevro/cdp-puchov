"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const objectState_1 = require("../../../../middleware/objectState");
class Turnout extends React.Component {
    render() {
        const { stateObject, displayLabel, definition: { name, SVGData: { x, y, rotate, home, dir }, }, } = this.props;
        const position = stateObject ? stateObject.position : undefined;
        const requestedState = stateObject ? stateObject.requestedPosition : undefined;
        const locked = stateObject ? stateObject.locked : [];
        return (React.createElement("g", { className: 'point ' + this.getStateClassName(position, !!locked.length, (requestedState !== position)), transform: 'translate(' + x + ',' + y + ')' },
            displayLabel && React.createElement("g", { transform: 'translate(0,-10)' },
                React.createElement("text", null, name)),
            React.createElement("g", { transform: 'rotate(' + rotate + ')' },
                React.createElement("polygon", { points: '0,-10 10,-10 10,10 0,10', fill: "black" }),
                (!position || (position === home)) ? React.createElement("line", { x1: 0, x2: 10, y1: 0, y2: 0 }) : null,
                (!position || (position !== home)) ?
                    React.createElement("line", { x1: 0, x2: 10, y1: 0, y2: (dir === 'L') ? (-6) : (6) }) : null)));
    }
    getStateClassName(state, lock, changing) {
        if (changing) {
            return 'changing';
        }
        if (!state) {
            return 'undefined';
        }
        if (lock) {
            return 'locked';
        }
        return 'not-locked';
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        stateObject: objectState_1.getTurnoutState(state, ownProps.definition.locoNetId),
        displayLabel: state.displayOptions.points,
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTurnoutClick: (id) => null,
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Turnout);
//# sourceMappingURL=Turnout.js.map