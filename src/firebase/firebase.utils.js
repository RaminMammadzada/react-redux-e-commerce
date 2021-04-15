import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDwrQ9XPVTsR3hoNLZKynkdESc4XXj0csQ',
  authDomain: 'crwn-db-ramin.firebaseapp.com',
  projectId: 'crwn-db-ramin',
  storageBucket: 'crwn-db-ramin.appspot.com',
  messagingSenderId: '589678322802',
  appId: '1:589678322802:web:6f60cb184609ec32308eeb',
  measurementId: 'G-RCN53LNNGK',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
