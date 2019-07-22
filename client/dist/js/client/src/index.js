"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const App_1 = require("./App");
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.hash.substr(1),
        };
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1),
            });
        });
    }
    render() {
        let accessKey;
        switch (this.state.route) {
            case '/ab-pu-lpm':
                accessKey = 'ab-PuLpM';
                break;
            default:
            case '/pu':
                accessKey = 'ZSTPu';
                break;
        }
        return (React.createElement(App_1.default, { accessKey: accessKey }));
    }
}
ReactDOM.render(React.createElement(Main, null), document.getElementsByTagName('main')[0]);
//# sourceMappingURL=index.js.map