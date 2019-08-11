import {all, call} from 'redux-saga/effects';
import {fetchCollectionsStart} from './shop/shop-saga';
import { userSaga } from './user/user-saga';

export default function* rootsaga(){
    yield all([
        call(fetchCollectionsStart),
        call(userSaga)
    ]);
}

