"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Card extends React.Component {
    render() {
        return (React.createElement("div", { className: "card bg-black border-light" },
            React.createElement("div", { className: "card-header" },
                React.createElement("h5", null, this.props.name)),
            this.props.children));
    }
}
exports.default = Card;
//# sourceMappingURL=Card.js.map