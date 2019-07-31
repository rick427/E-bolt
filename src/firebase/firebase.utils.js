import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVmY3npU79MZJgDmg6DuPKWIrKaPKJOuU",
    authDomain: "e-bolt.firebaseapp.com",
    databaseURL: "https:e-bolt.firebaseio.com",
    projectId: "e-bolt",
    storageBucket: "e-bolt.appspot.com",
    messagingSenderId: "325940872136",
    appId: "1:325940872136:web:91ab6b1f2af9f314"
};
//initial firebase to config object
firebase.initializeApp(config);

//expprt auth and firestore methods globally
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInwWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;