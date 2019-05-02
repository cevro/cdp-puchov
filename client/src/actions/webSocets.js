"use strict";
exports.__esModule = true;
/**
 * Created by miso on 1.7.2017.
 */
exports.ACTION_MESSAGE_RETRIEVE = 'ACTION_MESSAGE_RETRIEVE';
exports.onMessageRetrieve = function (data) {
    return {
        type: exports.ACTION_MESSAGE_RETRIEVE,
        data: data
    };
};
exports.ACTION_ROUTE_RETRIEVE = 'ACTION_ROUTE_RETRIEVE';
exports.onRouteRetrieve = function (data) {
    return {
        type: exports.ACTION_ROUTE_RETRIEVE,
        data: data
    };
};
exports.ACTION_SIGNAL_RETRIEVE = 'ACTION_SIGNAL_RETRIEVE';
exports.onSignalRetrieve = function (data) {
    return {
        type: exports.ACTION_SIGNAL_RETRIEVE,
        data: data
    };
};
exports.ACTION_SECTOR_RETRIEVE = 'ACTION_SECTOR_RETRIEVE';
exports.onSectorRetrieve = function (data) {
    return {
        type: exports.ACTION_SECTOR_RETRIEVE,
        data: data
    };
};
exports.ACTION_MESSAGE_SEND = 'ACTION_MESSAGE_SEND';
exports.onSendMessage = function (text) {
    return {
        type: exports.ACTION_MESSAGE_SEND,
        text: text
    };
};
