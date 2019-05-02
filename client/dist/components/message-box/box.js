"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require("react");
const react_redux_1 = require("react-redux");
class Box extends React.Component {
    render() {
        const { messages } = this.props;
        const msgs = messages.map((message, index) => {
            let { text, lvl } = message;
            let className = 'info';
            switch (lvl) {
                case -1:
                    className = 'danger';
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
            return (React.createElement("div", { className: 'alert alert-' + className, key: index }, text));
        });
        return (React.createElement("div", null, msgs));
    }
}
const mapStateToProps = (state, onwProps) => {
    return __assign({}, onwProps, { messages: state.messages });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(Box);
//# sourceMappingURL=box.js.map