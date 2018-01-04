import firebase from 'firebase';

const keys = require('./keys');

const config = {
  apiKey: keys.firebaseApiKey,
  authDomain: keys.firebaseAuthDomain,
  databaseURL: keys.firebaseDatabaseURL,
  projectId: keys.firebaseProjectId,
  storageBucket: keys.firebaseStorageBucket,
  messagingSenderId: keys.firebaseMessagingSenderId,
};
firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
