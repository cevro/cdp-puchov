import {ACTION_ROUTE_RETRIEVE} from '../actions/webSocets';

const routeRetrieve = (state, action) => {
    const {name} = action.data;
    return {...state, [name]: action.data};
};

export const routes = (state = {}, action) => {
    const {type} = action;
    switch (type) {
        case ACTION_ROUTE_RETRIEVE:
            return routeRetrieve(state, action);
        default:
            return state;
    }
};