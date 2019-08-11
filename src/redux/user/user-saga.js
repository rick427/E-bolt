import {takeLatest, put, all, call} from 'redux-saga/effects';
import { GOOGLE_SIGNIN_START, EMAIL_SIGNIN_START, CHECK_USER_SESSION, SIGN_OUT_START} from './user-types';
import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure } from './user-actions';

export function* getSnapshotFromUserAuth(userAuth){
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(
          signInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
        )
    }
    catch(error){
        yield put(signInFailure(error))
      }
}

export function* signInWithGoogle(){
    try {
      const {user} = yield auth.signInWithPopup(googleProvider);
      yield getSnapshotFromUserAuth(user)
    }
    catch(error){
      yield put(signInFailure(error))
    }
}

export function* signInWithEmail({payload: {email,password}}){
    try {
      const {user} = yield auth.signInWithEmailAndPassword(email, password);
      const userRef = yield call(createUserProfileDocument, user);
      const userSnapshot = yield userRef.get();
      yield put(
        signInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
        )
    }catch(error){
        put(signInFailure(error))
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(GOOGLE_SIGNIN_START, signInWithGoogle)
}

export function* userSaga(){
    yield all([
      call(onGoogleSignInStart), 
      call(onEmailSignInStart),
      call(isUserAuthenticated),
      call(onSignOutStart)
    ])
}

export function* isUserAuthenticated(){
  try {
    const userAuth = yield getCurrentUser();
    if(!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* onEmailSignInStart(){
    yield takeLatest(EMAIL_SIGNIN_START, signInWithEmail)
}


export function* onCheckUserSession(){
  yield takeLatest(CHECK_USER_SESSION)
}

export function* signOut(){
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

export function* onSignOutStart(){
  yield takeLatest(SIGN_OUT_START, signOut)
}