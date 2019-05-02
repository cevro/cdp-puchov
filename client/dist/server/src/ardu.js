"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SerialPort = require("serialport");
exports.getSerialMessage = function (obj) {
    return obj.object.toString() + '|' + obj.signal.toString();
};
var Arduino = (function () {
    function Arduino(PORT) {
        this.connector = new SerialPort(PORT, {
            baudrate: 9600,
            // defaults for Arduino serial communication
            dataBits: 8,
            parity: 'none',
            stopBits: 1,
            flowControl: false,
            parser: SerialPort.parsers.readline('\n')
        });
        this.busy = false;
        this.Buffer = [];
        this.dateRetrive();
    }
    ;
    Arduino.prototype.write = function (object, callback) {
        this.Buffer.push(Object.assign({}, object, { callback: callback }));
        this.sendOnce();
    };
    Arduino.prototype.sendOnce = function () {
        if (this.busy) {
            return;
        }
        if (!this.Buffer.length) {
            return;
        }
        this.busy = true;
        this.waitingObject = this.Buffer.shift();
        var msg = exports.getSerialMessage(this.waitingObject);
        this.connector.write(msg);
        // console.log('Sending ' + msg);
    };
    Arduino.prototype.dateRetrive = function () {
        var _this = this;
        this.connector.on('data', function (data) {
            var waitingObject = _this.waitingObject;
            _this.busy = false;
            waitingObject.callback(data);
            _this.sendOnce();
        });
    };
    return Arduino;
}());
exports.Arduino = Arduino;
exports.default = new Arduino('/dev/ttyUSB0');
//# sourceMappingURL=ardu.js.map