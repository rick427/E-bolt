import {takeLatest, call, put, all } from 'redux-saga/effects';
import {firestore, convertCollectionsToSnapshot} from '../../firebase/firebase.utils';
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop-actions';
import { FETCH_COLLECTIONS_START } from './shop-types';

export function* fetchCollectionsAsync(){
   try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionsToSnapshot, snapshot);
        yield put(fetchCollectionsSuccess(collectionMap))
   }
   catch(error){
      yield put(fetchCollectionsFailure(error.message));    
   }
}

export function* fetchCollectionsStart(){
    yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync )
}

export function* shopSagas(){
   yield all([
      call(fetchCollectionsStart)
   ])
}