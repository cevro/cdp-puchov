"use strict";
const React = require("react");
const index_1 = require("./parts/signals/index");
const index_2 = require("./parts/sectors/index");
const context_menu_1 = require("./parts/signals/context-menu");
class Scheme extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("svg", { viewBox: "0 -90 2050 400", style: { width: '100%' } },
                React.createElement("polyline", { points: "0,0 2100,0", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "0,30 2100,30", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "0,60 2000,60", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "150,0 200,30", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "125,60 175,30", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "225,30 275,0", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "275,30 325,60", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "350,0 400,-30 1575,-30 1625,0", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "400,-30 450,-60 1000,-60 1050,-30", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "400,30 600,150 1450,150", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "500,90 1700,90 1830,220 1830,300", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "550,90 600,120 1700,120 1800,220 1800,300", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "375,60 725,270 1100,270 1200,210", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "575,180 1400,180", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "625,210 1350,210 1500,120", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "675,210 725,240 1500,240", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "1425,0 1475,30", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "1500,30 1700,150", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "1600,120 1700,60", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "1750,60 1800,90", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "1775,60 1825,30", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "1850,30 1900,0", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement("polyline", { points: "1700,30 1650,0", strokeWidth: "1", stroke: "#555", fill: "none" }),
                React.createElement(index_2.default, null),
                React.createElement(index_1.default, null)),
            React.createElement(context_menu_1.default, null)));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Scheme;
//# sourceMappingURL=index.js.map