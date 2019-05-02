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
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_object_1 = require("../abstract-object");
var status_1 = require("../../../consts/obvod/status");
exports.SECTOR_TYPE = 'obvod';
var Sector = (function (_super) {
    __extends(Sector, _super);
    function Sector(_a) {
        var name = _a.name;
        var _this = _super.call(this, { name: name }) || this;
        _this.type = exports.SECTOR_TYPE;
        _this.status = status_1.STATUS_FREE;
        return _this;
    }
    Sector.prototype.registerListener = function () {
    };
    Sector.prototype.init = function () {
    };
    Sector.prototype.changeStatus = function (nextStatus) {
        this.status = +nextStatus;
        this.emit('SECTOR_CHANGED');
        this.sendStatus();
    };
    return Sector;
}(abstract_object_1.AbstractObject));
exports.default = Sector;
//# sourceMappingURL=sector.js.map