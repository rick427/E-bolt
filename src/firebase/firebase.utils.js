import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVmY3npU79MZJgDmg6DuPKWIrKaPKJOuU",
    authDomain: "e-bolt.firebaseapp.com",
    databaseURL: "https:e-bolt.firebaseio.com",
    projectId: "e-bolt",
    storageBucket: "",
    messagingSenderId: "325940872136",
    appId: "1:325940872136:web:91ab6b1f2af9f314"
};

export const createUserProfileDocument = async (userAuth, moreData) => {
  if(!userAuth) return;

  const userRef = (firestore.doc(`users/${userAuth.uid}`));

  const snapShot = await userRef.get();

  if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...moreData
        })
      }catch(error){
          console.log('error creating user', error)
      }
  }

  return userRef;
}

//initial firebase to config object
firebase.initializeApp(config);

//exp0rt auth and firestore methods  = firebase.auth();
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google sign in setup
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInwWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;