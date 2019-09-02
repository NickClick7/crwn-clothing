import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCYRczZElfctPN66KhaJwfuNZ2zoSpOT6Q",
    authDomain: "crwn-db-de5e6.firebaseapp.com",
    databaseURL: "https://crwn-db-de5e6.firebaseio.com",
    projectId: "crwn-db-de5e6",
    storageBucket: "",
    messagingSenderId: "119957304010",
    appId: "1:119957304010:web:bbd261f8b6da7644"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;