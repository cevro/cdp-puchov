"use strict";
/**
 * Created by miso on 20.11.2016.
 */
var serialport_1 = require('serialport');
var Ardu = (function () {
    function Ardu(PORT) {
        this.connector = new serialport_1.SerialPort(PORT, {
            baudrate: 9600,
            // defaults for Arduino serial communication
            dataBits: 8,
            parity: 'none',
            stopBits: 1,
            flowControl: false,
            parser: serialport_1.SerialPort.parsers.readline('\n')
        });
        this.Buffer = [];
        this._busy = false;
        this.dateRetrive();
    }
    ;
    Ardu.prototype.getMsg = function (obj, signal) {
        return obj.toString() + '|' + signal.toString();
    };
    Ardu.prototype.write = function (object, signal, p) {
        if (p === void 0) { p = false; }
        var o = { object: object, signal: signal };
        this.Buffer = this.Buffer.filter(function (d) {
            return d.object != object;
        });
        if (p) {
            this.Buffer.unshift(o);
        }
        else {
            this.Buffer.push(o);
        }
        this.sendOnce();
    };
    Ardu.prototype.sendOnce = function () {
        if (this._busy) {
            return;
        }
        if (!this.Buffer.length) {
            return;
        }
        this._busy = true;
        var _a = this.Buffer.shift(), object = _a.object, signal = _a.signal;
        var msg = this.getMsg(object, signal);
        this.connector.write(msg);
        console.debug('Sending ' + msg);
        this.sendOnce();
    };
    Ardu.prototype.dateRetrive = function () {
        var _this = this;
        this.connector.on('data', function (data) {
            _this._busy = false;
            _this.sendOnce();
        });
    };
    return Ardu;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Ardu;
