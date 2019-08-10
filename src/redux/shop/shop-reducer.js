import SHOP_DATA from './shopData';
import { UPDATE_COLLECTIONS } from './shop-types';

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}
export default shopReducer;