import {
    GOOGLE_SIGNIN_START, 
    EMAIL_SIGNIN_START,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    CHECK_USER_SESSION,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_START,
    SIGN_OUT_FAILURE,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE, 
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

export const checkUserSession = () => ({
    type: CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
    type: SIGN_OUT_FAILURE,
    payload: error
})

export const signUpStart = userCredentials => ({
    type: SIGN_UP_START,
    payload: userCredentials
})

export const signUpSuccess = ({user, addtionalData}) => ({
    type: SIGN_UP_SUCCESS,
    payload: {user, addtionalData}
})

export const signUpFailure = error => ({
    type: SIGN_UP_FAILURE,
    payload: error
})