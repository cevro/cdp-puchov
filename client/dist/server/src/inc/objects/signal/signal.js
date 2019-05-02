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
var ardu_1 = require("../../../ardu");
var signals_1 = require("../../../consts/signal/signals");
exports.SIGNAL_TYPE = 'signal';
var Signal = (function (_super) {
    __extends(Signal, _super);
    function Signal(_a) {
        var name = _a.name, type = _a.type, arduino = _a.arduino, port = _a.port;
        var _this = _super.call(this, { name: name }) || this;
        _this.signalType = type;
        _this.arduino = arduino;
        _this.port = port;
        _this.type = exports.SIGNAL_TYPE;
        _this.status = signals_1.NAVEST_STOJ;
        return _this;
    }
    Signal.prototype.registerListener = function () {
    };
    Signal.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setStatus(signals_1.NAVEST_STOJ)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Signal.prototype.beforeHandleChange = function (id) {
        this.lock();
        this.sendMessage('Signal: ' + this.name + ' sa prestavuje do polohy: ' + id, levels_1.MSG_INFO);
    };
    Signal.prototype.afterHandleChange = function (id) {
        this.unlock();
        _super.prototype.setStatus.call(this, id);
        this.sendStatus();
        this.emit('SIGNAL_CHANGED');
        this.sendMessage('návestidlo: ' + this.name + ' bolo prestavené do polohy: ' + id, levels_1.MSG_SUCCESS);
    };
    Signal.prototype.setStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.status === id) {
                    this.emit('SIGNAL_CHANGED');
                    return [2 /*return*/];
                }
                if (this.isLocked()) {
                    return [2 /*return*/];
                }
                this.beforeHandleChange(id);
                return [2 /*return*/, new Promise(function (reslove, reject) {
                        var o = { object: _this.port, signal: id };
                        var callback = function (data) {
                            console.log(data);
                            if (data.trim() == ardu_1.getSerialMessage(o)) {
                                _this.afterHandleChange(id);
                                reslove();
                            }
                            else {
                                _this.arduino.write(o, callback);
                            }
                        };
                        _this.arduino.write(o, callback);
                    })];
            });
        });
    };
    return Signal;
}(abstract_object_1.AbstractObject));
exports.Signal = Signal;
exports.VCHODOVE = 'VCHODOVE';
exports.ODCHODOVE = 'ODCHODOVE';
exports.CESTOVE = 'CESTOVE';
exports.ODDIELOVE = 'ODDIELOVE';
//# sourceMappingURL=signal.js.map