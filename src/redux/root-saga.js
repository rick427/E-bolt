import {all, call} from 'redux-saga/effects';
import {fetchCollectionsStart} from './shop/shop-saga';

export default function* rootsaga(){
    yield all([
        call(fetchCollectionsStart)
    ]);
}

