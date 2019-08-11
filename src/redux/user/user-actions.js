import {
    GOOGLE_SIGNIN_START, 
    EMAIL_SIGNIN_START,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE, 
} from './user-types';

export const googleSignInStart = () => ({
    type: GOOGLE_SIGNIN_START
});

export const signInSuccess = user => ({
    type: SIGNIN_SUCCESS,
    payload: user
})

export const signInFailure = error => ({
    type: SIGNIN_FAILURE,
    payload: error
})

export const emailSignInStart = userData => ({
    type: EMAIL_SIGNIN_START,
    payload: userData
});
