"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const routeBuilder_1 = require("../actions/routeBuilder");
class RouteBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            40: false,
            PN: false,
            alert: false,
        };
    }
    render() {
        const { onBuildRoute, availableRoutes } = this.props;
        /* const objects = ;*/
        return (React.createElement("div", { className: "list-group" }, availableRoutes.map((route) => {
            return (React.createElement("div", { className: "list-group-item" },
                React.createElement("h6", null, route.name),
                React.createElement("div", { className: "form-check" },
                    React.createElement("input", { checked: this.state.PN, type: "checkbox", disabled: this.state[40] || this.state.alert, onChange: (event) => {
                            this.setState({
                                PN: !!event.target.checked,
                                40: false,
                                alert: false,
                            });
                        } }),
                    React.createElement("label", null, "PN")),
                React.createElement("div", { className: "form-check" },
                    React.createElement("input", { checked: this.state[40], disabled: this.state.PN, type: "checkbox", onChange: (event) => {
                            this.setState({
                                PN: false,
                                40: !!event.target.checked,
                            });
                        } }),
                    React.createElement("label", null, "40km/h")),
                React.createElement("div", { className: "form-check" },
                    React.createElement("input", { checked: this.state.alert, disabled: this.state.PN, type: "checkbox", onChange: (event) => {
                            this.setState({
                                PN: false,
                                alert: !!event.target.checked,
                            });
                        } }),
                    React.createElement("label", null, "Trvale v\u00FDstraha")),
                React.createElement("button", { onClick: () => {
                        const state = this.state;
                        onBuildRoute(route.id, Object.assign({}, state));
                    }, className: "col-6 btn btn-success" }, "Build")));
        })));
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onBuildRoute: (id, buildOptions) => routeBuilder_1.buildRoute(dispatch, id, buildOptions),
    };
};
const mapStateToProps = (state) => {
    return {
        availableRoutes: state.routeBuilder.availableRoutes,
        startSignal: state.routeBuilder.startSignalId,
        endSector: state.routeBuilder.endSectorId,
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(RouteBuilder);
//# sourceMappingURL=RouteBuilder.js.map