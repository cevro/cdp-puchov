"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const Points_1 = require("../definitions/Points");
const webSocets_1 = require("../../actions/webSocets");
class TurnoutPreview extends React.Component {
    render() {
        const { turnoutsState: pointsState } = this.props;
        return (React.createElement("div", { className: "list-group list-scroll" }, Points_1.turnouts.map((sectorDef, index) => {
            // sectorsState[id];
            // sectorDef.id;
            const pointState = pointsState[sectorDef.locoNetId];
            const state = pointState ? pointState.position : undefined;
            const locked = pointState ? pointState.locked : [];
            return React.createElement("div", { className: "list-group-item", key: index },
                React.createElement("div", { className: "row" },
                    React.createElement("span", { className: "col-1" }, sectorDef.locoNetId),
                    React.createElement("span", { className: "col-2" }, sectorDef.name),
                    React.createElement("span", { className: "col-2" }),
                    React.createElement("span", { className: "col-1" },
                        React.createElement("span", { className: this.getClassNameByState(state) }, state === undefined ? 'NA' : state)),
                    React.createElement("div", { className: "col-3" }, this.getButton(sectorDef.locoNetId, state)),
                    React.createElement("div", { className: "col-4" }, locked.map((id) => {
                        return React.createElement("small", { className: 'ml-1' }, id);
                    }))));
        })));
    }
    getButton(id, state) {
        const buttons = [];
        if (state === 0 || state === 1) {
            buttons.push(React.createElement("button", { className: "btn btn-sm btn-secondary", onClick: () => {
                    this.props.onChangeTurnout(id, -1);
                } }, "-"));
        }
        if (state === 0 || state === -1) {
            buttons.push(React.createElement("button", { className: "btn btn-sm btn-primary", onClick: () => {
                    this.props.onChangeTurnout(id, 1);
                } }, "+"));
        }
        return React.createElement(React.Fragment, null, buttons);
    }
    getClassNameByState(state) {
        if (state === undefined) {
            return 'badge badge-undefined';
        }
        switch (state) {
            case -1:
                return 'badge badge-warning';
            case 1:
                return 'badge badge-success';
            default:
                return 'badge badge-danger';
        }
    }
}
const mapStateToProps = (state) => {
    return {
        turnoutsState: state.objectState.turnouts,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeTurnout: (id, state) => webSocets_1.changeTurnout(dispatch, id, state),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(TurnoutPreview);
//# sourceMappingURL=PointsPreview.js.map