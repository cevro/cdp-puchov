"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var status_1 = require("../../../consts/obvod/status");
var SectorsGroup = (function () {
    function SectorsGroup(sectors) {
        this.sectors = sectors;
    }
    SectorsGroup.prototype.isFree = function () {
        return this.sectors.every(function (sector) {
            return sector.getStatus() === status_1.STATUS_FREE;
        });
    };
    SectorsGroup.prototype.lock = function () {
        this.sectors.forEach(function (sector) {
            sector.lock();
        });
    };
    SectorsGroup.prototype.unlock = function () {
        this.sectors.forEach(function (obvod) {
            obvod.unlock();
        });
    };
    SectorsGroup.prototype.isReserved = function () {
        return this.sectors.every(function (sector) {
            return sector.getStatus() === status_1.STATUS_IN_VC;
        });
    };
    SectorsGroup.prototype.allocate = function () {
        this.sectors.forEach(function (sector) {
            sector.changeStatus(status_1.STATUS_IN_VC);
        });
    };
    SectorsGroup.prototype.deallocate = function () {
        this.sectors.forEach(function (obvod) {
            obvod.changeStatus(status_1.STATUS_FREE);
        });
    };
    SectorsGroup.prototype.addListeners = function (callback) {
        this.sectors.forEach(function (sector) {
            sector.addListener('SECTOR_CHANGED', function () {
                return callback();
            });
        });
    };
    return SectorsGroup;
}());
exports.default = SectorsGroup;
//# sourceMappingURL=sector-group.js.map