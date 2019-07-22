"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
class RouteBuilderMessageBox extends React.Component {
    render() {
        return (React.createElement("div", { className: "list-group list-scroll" },
            React.createElement("div", { className: "list-group-item" },
                React.createElement("span", { className: this.props.trainRoute.locked ? 'fa fa-lock' : 'fa fa-unlock-alt' }),
                this.props.trainRoute.hasError && React.createElement(React.Fragment, null,
                    React.createElement("span", { className: "badge badge-danger" }, "Error"),
                    React.createElement("button", { className: "btn btn-danger" }, "Clear error"))),
            this.props.trainRoute.buffer.map((bufferItem) => {
                return React.createElement("div", { className: "list-group-item", key: bufferItem.id },
                    React.createElement("div", { className: "row" },
                        React.createElement("small", { className: "col-3" }, bufferItem.id),
                        React.createElement("span", { className: "col-2" }, bufferItem.name),
                        React.createElement("div", { className: "col-2" },
                            React.createElement("span", { className: this.getClassNameByState(bufferItem.state) }, bufferItem.state)),
                        React.createElement("small", { className: "col-3" }, bufferItem.reason),
                        React.createElement("small", { className: "col-2" },
                            bufferItem.buildOptions[40] ? '40' : null,
                            bufferItem.buildOptions.PN ? 'PN' : null,
                            bufferItem.buildOptions.alert ? 'alert' : null)));
            })));
    }
    getClassNameByState(state) {
        switch (state) {
            case 'waiting':
                return 'badge badge-secondary';
            case 'built':
                return 'badge badge-success';
            case 'building':
                return 'badge badge-warning';
            default:
                return 'badge';
        }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {};
};
const mapStateToProps = (store) => {
    return {
        trainRoute: store.objectState.routeBuilder,
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(RouteBuilderMessageBox);
//# sourceMappingURL=RouteBuilderMessageBox.js.map