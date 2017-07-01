import {ACTION_SECTOR_RETRIEVE} from '../actions/webSocets';

const sectorRetrieve = (state, action) => {
    const {name} = action.data;
    return {...state, [name]: action.data};
};

export const sectors = (state = {}, action) => {
    const {type} = action;
    switch (type) {
        case ACTION_SECTOR_RETRIEVE:
            return sectorRetrieve(state, action);
        default:
            return state;
    }
};