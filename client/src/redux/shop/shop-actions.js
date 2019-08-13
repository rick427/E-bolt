import {FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE} from './shop-types';
import { firestore, convertCollectionsToSnapshot } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionMap => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionsToSnapshot(snapshot)
            dispatch(fetchCollectionsSuccess(collectionMap))
        })
        .catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}
