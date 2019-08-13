import {takeLatest, put, all, call} from 'redux-saga/effects';
import { GOOGLE_SIGNIN_START, EMAIL_SIGNIN_START, CHECK_USER_SESSION, SIGN_OUT_START, SIGN_UP_START, SIGN_UP_SUCCESS} from './user-types';
import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpFailure, signUpSuccess } from './user-actions';

export function* getSnapshotFromUserAuth(userAuth, additionalData){
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
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
      call(onSignOutStart),
      call(onSignUpStart),
      call(onSignUpSuccess)
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

export function* signUp({payload: {email, password, displayName}}){
  try {
    const {user} = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({user, additionalData: {displayName}}))
  } 
  catch (error) {
    yield put(signUpFailure(error))
  }
}

export function* signInAfterSignUp({payload: {user, additionalData}}){
  yield getSnapshotFromUserAuth(user, additionalData)
}

export function* onSignUpSuccess(){
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignUpStart(){
  yield takeLatest(SIGN_UP_START, signUp)
}