import {all, call, takeLatest, put} from 'redux-saga/effects';
import {clearCart} from './cart-actions';
import {SIGN_OUT_SUCCESS} from '../user/user-types';

export function* clearCartOnSignIn(){
    yield put(clearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignIn)
}

export function* cartSaga(){
    yield all([
        call(onSignOutSuccess)
    ])
}