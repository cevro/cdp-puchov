"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const webSocets_1 = require("../../../actions/webSocets");
const react_redux_1 = require("react-redux");
class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = { display: false };
    }
    render() {
        const { objectState, definition } = this.props;
        const active = objectState ? objectState.active : undefined;
        const error = objectState ? objectState.errorCode : undefined;
        const state = objectState ? objectState.state : undefined;
        const ABCondition = state ? objectState.fullBlockConditionActive : undefined;
        if (this.props.displayOnlyInterest) {
            if (active === 0) {
                return null;
            }
            if (ABCondition === 1 && error === 0) {
                return null;
            }
        }
        return React.createElement("div", { className: 'list-group-item ' + this.getListClassName(objectState, active, error, ABCondition) },
            React.createElement("div", { className: "row" },
                React.createElement("span", { className: "col-2" }, definition.locoNetId),
                React.createElement("span", { className: "col-2" },
                    React.createElement("span", { className: 'badge badge-' + (active ? 'success' : 'secondary') }, active ? 'active' : 'inactive')),
                React.createElement("span", { className: "col-2" }, error !== 0 ? React.createElement("span", { className: this.getErrorClassName(error) },
                    "ER:",
                    error) : null),
                React.createElement("span", { className: "col-2" },
                    React.createElement("span", { className: this.getStateClassName(state) }, this.getStateLabel(state))),
                React.createElement("span", { className: "col-2" },
                    React.createElement("span", { className: 'badge badge-' + ((ABCondition === undefined) ? 'undefined' : (ABCondition ? 'success' : 'warning')) },
                        "ABC ",
                        ABCondition ? 'ON' : 'OFF')),
                React.createElement("span", { className: "col-" },
                    React.createElement("button", { className: "btn btn-link", onClick: (e) => {
                            e.preventDefault();
                            this.setState({ display: !this.state.display });
                        } },
                        React.createElement("span", { className: this.state.display ? 'fa fa-chevron-up' : 'fa fa-chevron-down' })))),
            React.createElement("div", { className: 'row border-top ' + (this.state.display ? '' : 'd-none') },
                error > 0 ?
                    React.createElement("button", { className: "btn btn-sm btn-primary", onClick: () => this.props.onRemoveABError() }, "remove ERR") : null,
                ABCondition ?
                    React.createElement("button", { className: "btn btn-sm btn-danger", onClick: () => this.props.onChangeABCondition(0) }, "Turn OFF AB condition") :
                    React.createElement("button", { className: "btn btn-sm btn-success", onClick: () => this.props.onChangeABCondition(1) }, "Turn ON AB condition")));
    }
    getListClassName(objectState, active, error, ABCondition) {
        if (objectState === undefined) {
            return 'list-item-undefined';
        }
        if (!active) {
            return 'list-item-secondary';
        }
        if (error > 0) {
            return 'list-item-danger';
        }
        if (ABCondition === 0) {
            return 'list-item-warning';
        }
    }
    getErrorClassName(error) {
        if (error === undefined) {
            return 'badge badge-undefined';
        }
        switch (error) {
            case -1:
                return 'badge badge-undefined';
            case 0:
                return 'badge';
            case 1:
                return 'badge badge-danger';
            default:
                return 'badge badge-warning';
        }
    }
    getStateClassName(state) {
        if (state === undefined) {
            return 'badge badge-undefined';
        }
        switch (state) {
            case -1:
                return 'badge badge-undefined';
            case 1:
                return 'badge badge-danger';
            case 2:
                return 'badge badge-success';
            default:
                return 'badge badge-warning';
        }
    }
    getStateLabel(state) {
        if (state === undefined) {
            return 'undefined';
        }
        switch (state) {
            case -1:
                return 'undefined';
            case 1:
                return 'used';
            case 2:
                return 'free';
            default:
                return 'WTF';
        }
    }
}
const mapStateToProps = (state) => {
    return {
        ABSectorsState: state.objectState.ABSectors,
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeABCondition: (state) => webSocets_1.changeABCondition(dispatch, ownProps.definition.locoNetId, state),
        onRemoveABError: () => webSocets_1.removeABError(dispatch, ownProps.definition.locoNetId),
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Row);
//# sourceMappingURL=Row.js.map