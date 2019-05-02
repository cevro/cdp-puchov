"use strict";
/**
 * Created by miso on 1.7.2017.
 */
exports.ACTION_MESSAGE_RETRIEVE = 'ACTION_MESSAGE_RETRIEVE';
exports.onMessageRetrieve = (data) => {
    return {
        type: exports.ACTION_MESSAGE_RETRIEVE,
        data,
    };
};
exports.ACTION_ROUTE_RETRIEVE = 'ACTION_ROUTE_RETRIEVE';
exports.onRouteRetrieve = (data) => {
    return {
        type: exports.ACTION_ROUTE_RETRIEVE,
        data,
    };
};
exports.ACTION_SIGNAL_RETRIEVE = 'ACTION_SIGNAL_RETRIEVE';
exports.onSignalRetrieve = (data) => {
    return {
        type: exports.ACTION_SIGNAL_RETRIEVE,
        data,
    };
};
exports.ACTION_SECTOR_RETRIEVE = 'ACTION_SECTOR_RETRIEVE';
exports.onSectorRetrieve = (data) => {
    return {
        type: exports.ACTION_SECTOR_RETRIEVE,
        data,
    };
};
exports.ACTION_MESSAGE_SEND = 'ACTION_MESSAGE_SEND';
exports.onSendMessage = (text) => {
    return {
        type: exports.ACTION_MESSAGE_SEND,
        text
    };
};
//# sourceMappingURL=webSocets.js.map