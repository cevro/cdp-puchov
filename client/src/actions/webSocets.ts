export const ACTION_MESSAGE_RETRIEVE = 'ACTION_MESSAGE_RETRIEVE';
export const onMessageRetrieve = (data) => {
    return {
        type: ACTION_MESSAGE_RETRIEVE,
        data,
    }
};

export const ACTION_ROUTE_RETRIEVE = 'ACTION_ROUTE_RETRIEVE';
export const onRouteRetrieve = (data) => {
    return {
        type: ACTION_ROUTE_RETRIEVE,
        data,
    }
};

export const ACTION_SIGNAL_RETRIEVE = 'ACTION_SIGNAL_RETRIEVE';
export const onSignalRetrieve = (data) => {
    return {
        type: ACTION_SIGNAL_RETRIEVE,
        data,
    }
};

export const ACTION_SECTOR_RETRIEVE = 'ACTION_SECTOR_RETRIEVE';
export const onSectorRetrieve = (data) => {
    return {
        type: ACTION_SECTOR_RETRIEVE,
        data,
    }
};

export const ACTION_MESSAGE_SEND = 'ACTION_MESSAGE_SEND';
export const onSendMessage = (text: string) => {
    return {
        type: ACTION_MESSAGE_SEND,
        text,
    };
};
