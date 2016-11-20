"use strict";
/**
 * Created by miso on 20.11.2016.
 */
var serialport_1 = require('serialport');
var ardu_1 = require('./ardu');
var mainsScript = (function () {
    function mainsScript() {
        this.run = function () {
            global.ardu = new ardu_1.default('/dev/ttyACM0');
            console.log(serialport_1.SerialPort);
            console.log('ahoj');
            // let Ardu =  new SerialPort();
            setTimeout(function () {
                console.debug(global.ardu);
                global.ardu.write(1, '6');
            }, 2000);
            setTimeout(function () {
                console.debug(global.ardu);
                //       global.ardu.write(1,'0',true);
            }, 2200);
        };
    }
    return mainsScript;
}());
var ms = new mainsScript();
ms.run();
