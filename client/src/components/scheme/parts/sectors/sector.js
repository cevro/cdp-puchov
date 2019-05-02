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
exports.__esModule = true;
var React = require("react");
var STATUS_FREE = 1;
var STATUS_BUSY = 0;
var STATUS_IN_VC = 2;
var STATUS_IN_PC = 3;
var STATUS_VYLUKA = 4;
var Sector = (function (_super) {
    __extends(Sector, _super);
    function Sector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sector.prototype.render = function () {
        var _a = this.props, name = _a.name, status = _a.status, busy = _a.busy;
        var data = this.getData(name);
        var statusColor = this.getStatusColor(status);
        return (<g className={busy ? 'busy' : 'free'} transform={'translate(' + data.px + ',' + data.py + ')'}>
                {data.points.map(function (points, index) {
            return (<polyline stroke={statusColor} key={index} points={points}/>);
        })}
            </g>);
    };
    Sector.prototype.getData = function (name) {
        switch (name) {
            case 'SK2_4':
                return { points: ['0,0 100,0'], px: 100, py: 200 };
            case 'SK2_3':
                return { points: ['0,0 100,0', '25,0 50,25'], px: 200, py: 200 };
            case 'SK2_2':
                return { points: ['0,0 100,0', '75,0 50,25'], px: 300, py: 200 };
            case 'SK2_1':
                return { points: ['0,0 100,0'], px: 400, py: 200 };
            case 'SK1_4':
                return { points: ['0,0 150,0'], px: 50, py: 250 };
            case 'SK1_3':
                return { points: ['0,0 100,0', '75,0 50,-25'], px: 200, py: 250 };
            case 'SK1_2':
                return { points: ['0,0 100,0', '25,0 50,-25'], px: 300, py: 250 };
            case 'SK1_1':
                return { points: ['0,0 100,0'], px: 400, py: 250 };
            case '1S_1':
                return { points: ['0,0 100,0'], px: -50, py: 250 };
            case '1S_2':
                return { points: ['0,0 100,0'], px: -150, py: 250 };
            case '2S_1':
                return { points: ['0,0 150,0'], px: -50, py: 200 };
            case '2S_2':
                return { points: ['0,0 100,0'], px: -150, py: 200 };
            default:
                return { points: [], px: 0, py: 0 };
        }
    };
    Sector.prototype.getStatusColor = function (status) {
        switch (status) {
            case STATUS_FREE: {
                return '#ddd';
            }
            case STATUS_BUSY: {
                return '#f00';
            }
            case STATUS_IN_VC: {
                return '#0f0';
            }
            case STATUS_IN_PC: {
                return '#fff';
            }
            case STATUS_VYLUKA: {
                return '#ff0';
            }
        }
    };
    return Sector;
}(React.Component));
exports["default"] = Sector;
