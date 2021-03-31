import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
  apiKey: "AIzaSyB3EE7ei2WN_ADJhJPGXkgc-DBhxO3AET8",
  authDomain: "chat-db507.firebaseapp.com",
  projectId: "chat-db507",
  storageBucket: "chat-db507.appspot.com",
  messagingSenderId: "786382670041",
  appId: "1:786382670041:web:2fb9ec23e43c5d78c196c8"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export {db,auth,provider}
