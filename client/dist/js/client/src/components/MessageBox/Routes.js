"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const routeBuilder_1 = require("../../actions/routeBuilder");
const RouteFinder_1 = require("../RouteFinder");
const RouteBuilder_1 = require("../RouteBuilder");
class Routes extends React.Component {
    componentDidUpdate() {
    }
    render() {
        const { availableRoutes, onClearSelect } = this.props;
        return React.createElement(React.Fragment, null,
            availableRoutes.length ? React.createElement(RouteBuilder_1.default, null) : React.createElement(RouteFinder_1.default, null),
            React.createElement("button", { onClick: () => {
                    onClearSelect();
                }, className: "btn btn-warning" }, "Clear"));
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onClearSelect: () => dispatch(routeBuilder_1.clearSelect()),
    };
};
const mapStateToProps = (store) => {
    return {
        availableRoutes: store.routeBuilder.availableRoutes,
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Routes);
//# sourceMappingURL=Routes.js.map