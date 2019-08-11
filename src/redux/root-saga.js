import {all, call} from 'redux-saga/effects';
import {shopSagas} from './shop/shop-saga';
import { userSaga } from './user/user-saga';
import { cartSaga } from './cart/cart-saga';

export default function* rootsaga(){
    yield all([
        call(shopSagas),
        call(userSaga),
        call(cartSaga)
    ]);
}

