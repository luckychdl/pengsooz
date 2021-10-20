import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
  apiKey: "AIzaSyDnIUm_X60oLLTOnRHSdwiFIjvi2btG7zc",
  authDomain: "codecamp-446bd.firebaseapp.com",
  projectId: "codecamp-446bd",
  storageBucket: "codecamp-446bd.appspot.com",
  messagingSenderId: "910012870523",
  appId: "1:910012870523:web:7dafe14a72550b92e657de",
  measurementId: "G-LMFVJRMQWN",
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
export const dbservice = firebase.firestore();
