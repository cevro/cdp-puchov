"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const webSocets_1 = require("../../actions/webSocets");
exports.SECTOR_STATE_OCCUPIED = 2;
exports.SECTOR_STATE_FREE = 1;
exports.SECTOR_STATE_UNDEFINED = -1;
class SectorsPreview extends React.Component {
    render() {
        const { sectors, sectorsState } = this.props;
        return (React.createElement("div", { className: "list-group list-scroll" }, sectors.map((sectorDef, index) => {
            // sectorsState[id];
            // sectorDef.id;
            const state = sectorsState[sectorDef.id] ? sectorsState[sectorDef.id].state : undefined;
            const locked = sectorsState[sectorDef.id] ? sectorsState[sectorDef.id].locked : null;
            return React.createElement("div", { className: "list-group-item", key: index },
                React.createElement("div", { className: "row" },
                    React.createElement("span", { className: "col-2" }, sectorDef.id),
                    React.createElement("span", { className: "col-2" }, sectorDef.name),
                    React.createElement("span", { className: "col-1" },
                        React.createElement("span", { className: this.getClassNameByState(state) }, state === undefined ? 'NA' : state)),
                    React.createElement("div", { className: "col-3" }, this.getButton(sectorDef.id, state)),
                    React.createElement("div", { className: "col-4" }, locked)));
        })));
    }
    getButton(id, state) {
        const buttons = [];
        if (state === exports.SECTOR_STATE_UNDEFINED || state === exports.SECTOR_STATE_OCCUPIED) {
            buttons.push(React.createElement("button", { key: 0, className: "btn btn-success btn-sm", onClick: () => {
                    this.props.onChangeSector(id, exports.SECTOR_STATE_FREE);
                } }, "Set free"));
        }
        if (state === exports.SECTOR_STATE_UNDEFINED || state === exports.SECTOR_STATE_FREE) {
            buttons.push(React.createElement("button", { key: 1, className: "btn btn-danger btn-sm", onClick: () => {
                    this.props.onChangeSector(id, exports.SECTOR_STATE_OCCUPIED);
                } }, "Set busy"));
        }
        return buttons;
    }
    getClassNameByState(state) {
        if (state === undefined) {
            return 'badge badge-undefined';
        }
        switch (state) {
            case exports.SECTOR_STATE_OCCUPIED:
                return 'badge badge-danger';
            case exports.SECTOR_STATE_FREE:
                return 'badge badge-secondary';
            default:
                return 'badge badge-dark';
        }
    }
}
const mapStateToProps = (state) => {
    return {
        sectorsState: state.objectState.sectors,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeSector: (id, state) => webSocets_1.changeSector(dispatch, id, state),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SectorsPreview);
//# sourceMappingURL=SectorsPreview.js.map