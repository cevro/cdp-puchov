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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_object_1 = require("../abstract-object");
var levels_1 = require("../../../consts/messages/levels");
var signals_1 = require("../../../consts/signal/signals");
var signal_strategy_1 = require("../signal/signal-strategy");
var index_1 = require("../../../consts/events/index");
exports.TRAIN_ROUTE_TYPE = 'cesta';
var TrainRoute = (function (_super) {
    __extends(TrainRoute, _super);
    function TrainRoute(_a) {
        var name = _a.name, signalFrom = _a.signalFrom, signalTo = _a.signalTo, speed = _a.speed, sectorsGroup = _a.sectorsGroup, _b = _a.persistent, persistent = _b === void 0 ? false : _b;
        var _this = _super.call(this, { name: name }) || this;
        _this.signalFrom = signalFrom;
        _this.signalTo = signalTo;
        _this.sectorsGroup = sectorsGroup;
        _this.speed = speed;
        _this.built = false;
        /**
         * 0 obsadeny
         * 1 free
         * @type {number}
         */
        _this.status = 0; // 0 entry signal to STOJ
        _this.type = exports.TRAIN_ROUTE_TYPE;
        _this.persistent = persistent;
        _this.registerListener();
        return _this;
    }
    TrainRoute.prototype.init = function () {
    };
    TrainRoute.prototype.isActive = function () {
        return this.built;
    };
    TrainRoute.prototype.registerListener = function () {
        var _this = this;
        this.signalTo.addListener('SIGNAL_CHANGED', function () {
            return _this.handleSignalToChanged();
        });
        this.addListener(index_1.ROUTE_BUILD, function () {
            return _this.handleBuild();
        });
        this.addListener('ROUTE_HARD_DOWN', function () {
            return _this.handleHardThrowDown();
        });
        this.sectorsGroup.addListeners(function () {
            _this.handleSectorChanged();
        });
    };
    TrainRoute.prototype.handleSignalToChanged = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.changeSignal()];
            });
        });
    };
    TrainRoute.prototype.handleBuild = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.canBuild()) {
                            this.sendMessage('Nedá sa postaviť vlaková cesta: ' + this.getName(), levels_1.MSG_ERROR);
                            return [2 /*return*/];
                        }
                        this.lock();
                        this.sendMessage('Stavá sa vlaková cesta: ' + this.getName(), levels_1.MSG_INFO);
                        this.sendStatus();
                        this.active = true;
                        this.sectorsGroup.allocate();
                        this.updateStatus();
                        this.unlock();
                        return [4 /*yield*/, this.changeSignal()];
                    case 1:
                        _a.sent();
                        this.sendMessage('Postavila sa vlaková cesta: ' + this.getName(), levels_1.MSG_SUCCESS);
                        this.sendStatus();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    TrainRoute.prototype.handleHardThrowDown = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.active) {
                            return [2 /*return*/];
                        }
                        if (this.persistent) {
                            this.sendMessage('Persistentá cesta nejde natvrdo zrušiť!', levels_1.MSG_ERROR);
                            return [2 /*return*/];
                        }
                        this.sendMessage('Ruší sa vlaková cesta' + this.getName());
                        this.lock();
                        this.status = 0;
                        this.sendStatus();
                        this.sectorsGroup.lock();
                        return [4 /*yield*/, this.changeSignal()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                setTimeout(function () {
                                    _this.sectorsGroup.unlock();
                                    _this.sectorsGroup.deallocate();
                                    _this.unlock();
                                    _this.handleThrowDown(true);
                                    _this.sendStatus();
                                    resolve();
                                }, 30000);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrainRoute.prototype.handleThrowDown = function (hard) {
        if (hard === void 0) { hard = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.isActive()) {
                    return [2 /*return*/, false];
                }
                if (this.isDownAble()) {
                    this.active = false;
                    this.sendMessage('Vlakova cesta zrušena: ' + this.getName(), levels_1.MSG_WARNING);
                    return [2 /*return*/, true];
                }
                return [2 /*return*/, false];
            });
        });
    };
    TrainRoute.prototype.handleSectorChanged = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.updateStatus();
                        return [4 /*yield*/, this.changeSignal()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.handleCancel()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrainRoute.prototype.handleCancel = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.isActive()) {
                    return [2 /*return*/];
                }
                if (!this.canCancel()) {
                    return [2 /*return*/];
                }
                this.active = false;
                this.sendMessage('Vlakova cesta zrušena: ' + this.getName(), levels_1.MSG_WARNING);
                return [2 /*return*/];
            });
        });
    };
    TrainRoute.prototype.canCancel = function () {
        return this.isDownAble();
    };
    TrainRoute.prototype.updateStatus = function () {
        this.status = this.sectorsGroup.isReserved() ? 1 : 0;
    };
    /**
     * Vyhodnotí obvody a či už daná VC nieje postavená
     * @returns {boolean}
     */
    TrainRoute.prototype.isBuildAble = function () {
        return (this.sectorsGroup.isFree() && !this.isActive());
    };
    /**
     * Uplna bloková podmienka
     * @returns {boolean}
     */
    TrainRoute.prototype.isDownAble = function () {
        return (this.sectorsGroup.isFree() && this.signalTo.getStatus() == signals_1.NAVEST_STOJ);
    };
    TrainRoute.prototype.changeSignal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var signal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        signal = signal_strategy_1.signalStrategy(this.signalFrom, this.signalTo, this.status, this.speed);
                        console.log(signal + ': ' + this.name);
                        console.log(this);
                        return [4 /*yield*/, this.signalFrom.setStatus(signal)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    return TrainRoute;
}(abstract_object_1.AbstractObject));
exports.default = TrainRoute;
/*  public deActivePersistent(): void {
 if (!this.persistent) {
 return;
 }
 this.persistent = false;
 this.hardDown();
 }*/
//# sourceMappingURL=train-route.js.map