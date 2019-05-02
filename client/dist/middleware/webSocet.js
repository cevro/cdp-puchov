"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const webSocets_1 = require("../actions/webSocets");
const url = 'ws://' + window.location.hostname + ':8081/';
exports.ws = new WebSocket(url, 'echo-protocol');
function sendMessage(dispatch, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const text = JSON.stringify(data);
        exports.ws.send(text);
        return dispatch(webSocets_1.onSendMessage(text));
    });
}
exports.sendMessage = sendMessage;
//# sourceMappingURL=webSocet.js.map