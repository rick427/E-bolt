import {
   SIGNIN_SUCCESS,
   SIGNIN_FAILURE
} from './user-types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case SIGNIN_FAILURE:
            return {
              ...state,
              error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;