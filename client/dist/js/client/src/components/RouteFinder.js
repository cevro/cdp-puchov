"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const Signals_1 = require("./definitions/Signals");
const Sectors_1 = require("./definitions/Sectors");
const routeBuilder_1 = require("../actions/routeBuilder");
class RouteFinder extends React.Component {
    render() {
        const { startSignal, endSector } = this.props;
        let signal = null;
        if (startSignal !== undefined) {
            signal = Signals_1.signals.filter((def) => {
                return def.locoNetId === startSignal;
            })[0];
        }
        let sector = null;
        if (endSector !== undefined) {
            sector = Sectors_1.sectors.filter((def) => {
                return def.id === endSector;
            })[0];
        }
        return (React.createElement("div", { className: "card-body" },
            React.createElement("div", { className: "row" },
                React.createElement("span", null, "Start signal:"),
                React.createElement("span", null, signal && signal.name)),
            React.createElement("div", { className: "row" },
                React.createElement("span", null, "End sector:"),
                React.createElement("span", null, sector && sector.name)),
            React.createElement("div", { className: "row" },
                React.createElement("button", { className: "btn btn-primary", onClick: () => {
                        this.props.onFindRoute(startSignal, endSector);
                    }, disabled: !(sector && signal) }, "Find"))));
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFindRoute: (signalId, sectorId) => routeBuilder_1.findRoute(dispatch, signalId, sectorId),
    };
};
const mapStateToProps = (state) => {
    return {
        startSignal: state.routeBuilder.startSignalId,
        endSector: state.routeBuilder.endSectorId,
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(RouteFinder);
//# sourceMappingURL=RouteFinder.js.map