"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var webSocet_1 = require("../middleware/webSocet");
var RouteBuilder = (function (_super) {
    __extends(RouteBuilder, _super);
    function RouteBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouteBuilder.prototype.render = function () {
        var _a = this.props, routes = _a.routes, sendMessage = _a.sendMessage;
        var objects = [];
        var _loop_1 = function (routeID) {
            if (routes.hasOwnProperty(routeID)) {
                var _a = routes[routeID], type_1 = _a.type, name_1 = _a.name, status_1 = _a.status, busy = _a.busy;
                var buildClick_1 = function () {
                    sendMessage({ type: type_1, name: name_1, act: 'build' });
                };
                var downClick_1 = function () {
                    sendMessage({ type: type_1, name: name_1, act: 'hard_down' });
                };
                objects.push(<div key={name_1}>
                        <span className={busy ? 'busy' : 'free'} style={{ color: status_1 ? 'red' : 'green' }}>{name_1}</span>
                        <button onClick={function () { return buildClick_1(); }} className="btn btn-success">Build!</button>
                        <button onClick={function () { return downClick_1(); }} className="btn btn-danger">zruš!</button>
                    </div>);
            }
        };
        for (var routeID in routes) {
            _loop_1(routeID);
        }
        return (<div>{objects}</div>);
    };
    return RouteBuilder;
}(React.Component));
var mapDispatchToProps = function (dispatch, ownProps) {
    return __assign({}, ownProps, { sendMessage: function (data) { return webSocet_1.sendMessage(dispatch, data); } });
};
var mapStateToProps = function (state, ownProps) {
    return __assign({}, ownProps, { routes: state.routes });
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(RouteBuilder);
