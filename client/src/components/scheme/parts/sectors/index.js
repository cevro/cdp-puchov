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
var sector_1 = require("./sector");
var Sectors = (function (_super) {
    __extends(Sectors, _super);
    function Sectors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sectors.prototype.render = function () {
        var sectors = this.props.sectors;
        var objects = [];
        for (var sectorID in sectors) {
            if (sectors.hasOwnProperty(sectorID)) {
                objects.push(<g key={sectorID}>
                    <sector_1["default"] {...sectors[sectorID]}/>
                </g>);
            }
        }
        return (<g>
            {objects}
        </g>);
    };
    return Sectors;
}(React.Component));
var mapStateToProps = function (state, ownProps) {
    return __assign({}, ownProps, { sectors: state.sectors });
};
exports["default"] = react_redux_1.connect(mapStateToProps, null)(Sectors);
