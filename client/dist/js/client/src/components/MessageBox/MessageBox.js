"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const Downloader_1 = require("../helpers/Downloader");
class MessageBox extends React.Component {
    render() {
        const { messages } = this.props;
        const msgs = messages.map((message, index) => {
            let { entity, action, date, data, id } = message;
            const dateObject = new Date(date);
            return (React.createElement("div", { className: "list-group-item", key: index },
                React.createElement("div", { className: "row" },
                    React.createElement("small", { className: "col-3" },
                        dateObject.getHours(),
                        ":",
                        dateObject.getMinutes(),
                        ":",
                        dateObject.getSeconds(),
                        ".",
                        dateObject.getMilliseconds()),
                    React.createElement("span", { className: "col-2" }, action),
                    React.createElement("span", { className: "col-3" }, entity),
                    React.createElement("span", { className: "col-2" }, id))));
        });
        return (React.createElement("div", { className: "list-group list-scroll" },
            React.createElement(Downloader_1.default, null),
            msgs));
    }
}
// <LocoNetConnector/>
const mapStateToProps = (state) => {
    return {
        messages: state.messages,
    };
};
exports.default = react_redux_1.connect(mapStateToProps, null)(MessageBox);
//# sourceMappingURL=MessageBox.js.map