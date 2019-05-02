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
var Box = (function (_super) {
    __extends(Box, _super);
    function Box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Box.prototype.render = function () {
        var messages = this.props.messages;
        var msgs = messages.map(function (message, index) {
            var text = message.text, lvl = message.lvl;
            var className = 'info';
            switch (lvl) {
                case -1:
                    className = 'error';
                    break;
                case 0:
                    className = 'info';
                    break;
                case 1:
                    className = 'success';
                    break;
                case 2:
                    className = 'warning';
                    break;
            }
            return (<div className={'message ' + className} key={index}>
                {text}
            </div>);
        });
        return (<div style={{ width: '25%', float: 'right' }}>
                {msgs}
            </div>);
    };
    return Box;
}(React.Component));
var mapStateToProps = function (state, onwProps) {
    return __assign({}, onwProps, { messages: state.messages });
};
exports["default"] = react_redux_1.connect(mapStateToProps)(Box);
