import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD4nQyk0DDFHYh0RvE0kw8Yq8NBfpzH9z8',
  authDomain: 'prisvardahjalpmedel10-db.firebaseapp.com',
  databaseURL: 'https://prisvardahjalpmedel10-db.firebaseio.com',
  projectId: 'prisvardahjalpmedel10-db',
  storageBucket: 'prisvardahjalpmedel10-db.appspot.com',
  messagingSenderId: '63584429356',
  appId: '1:63584429356:web:cdbf009d93631b4efcb889',
  measurementId: 'G-997Q1GN2EJ'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
