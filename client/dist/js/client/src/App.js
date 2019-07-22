"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const redux_logger_1 = require("redux-logger");
const redux_1 = require("redux");
const reducers_1 = require("./reducers/");
const MessageBox_1 = require("./components/MessageBox/MessageBox");
const Options_1 = require("./components/Options/Options");
const RouteBuilderMessageBox_1 = require("./components/MessageBox/RouteBuilderMessageBox");
const SectorsPreview_1 = require("./components/MessageBox/SectorsPreview");
const PointsPreview_1 = require("./components/MessageBox/PointsPreview");
const Card_1 = require("./components/helpers/Card");
const Routes_1 = require("./components/MessageBox/Routes");
const SignalsPreview_1 = require("./components/MessageBox/SignalsPreview");
const ContextMenu_1 = require("./components/Scheme/Parts/Signals/ContextMenu/ContextMenu");
const all_1 = require("./definition/all");
const Index_1 = require("./components/Scheme/Index");
const Index_2 = require("./components/MessageBox/ABSector/Index");
class App extends React.Component {
    render() {
        const store = redux_1.createStore(reducers_1.app, redux_1.applyMiddleware(redux_logger_1.logger));
        const scheme = all_1.frontEndScheme[this.props.accessKey];
        return (React.createElement(react_redux_1.Provider, { store: store },
            React.createElement("div", { className: "container-fluid" },
                React.createElement("div", { className: "row col-12 top-panel" },
                    React.createElement("div", { className: "col-3" },
                        React.createElement(Card_1.default, { name: 'Messages' },
                            React.createElement(MessageBox_1.default, null))),
                    scheme.cards.routeBuilder &&
                        React.createElement("div", { className: "col-3" },
                            React.createElement(Card_1.default, { name: 'Routes' },
                                React.createElement(Routes_1.default, null))),
                    React.createElement("div", { className: "col-3" },
                        React.createElement(Card_1.default, { name: 'AB Sectors' },
                            React.createElement(Index_2.default, { ABSectors: scheme.objects.ABSectors }))),
                    scheme.cards.routes &&
                        React.createElement("div", { className: "col-3" },
                            React.createElement(Card_1.default, { name: 'Built routes' },
                                React.createElement(RouteBuilderMessageBox_1.default, null)))),
                React.createElement("div", { className: "col-12" },
                    React.createElement(Index_1.default, { scheme: scheme })),
                React.createElement("div", { className: "row col-12 bottom-panel" },
                    scheme.cards.signals &&
                        React.createElement("div", { className: "col-3" },
                            React.createElement(Card_1.default, { name: 'Signals' },
                                React.createElement(SignalsPreview_1.default, { signals: scheme.objects.signals }))),
                    scheme.cards.sectors &&
                        React.createElement("div", { className: "col-3" },
                            React.createElement(Card_1.default, { name: 'Sectors' },
                                React.createElement(SectorsPreview_1.default, { sectors: scheme.objects.sectors }))),
                    scheme.cards.points &&
                        React.createElement("div", { className: "col-3" },
                            React.createElement(Card_1.default, { name: 'Turnouts' },
                                React.createElement(PointsPreview_1.default, null))),
                    React.createElement("div", { className: "col-3" },
                        React.createElement(Card_1.default, { name: 'Options' },
                            React.createElement(Options_1.default, null))))),
            React.createElement(ContextMenu_1.default, { signals: scheme.objects.signals })));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map