import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
  // apiKey: "AIzaSyBiQHU8fYrQHJRvlqhlY4oZY8J3gTz6Pjs",
  // authDomain: "pengsooz-project.firebaseapp.com",
  // projectId: "pengsooz-project",
  // storageBucket: "pengsooz-project.appspot.com",
  // messagingSenderId: "804935752343",
  // appId: "1:804935752343:web:308854f689b44b618ee7d2",
  // measurementId: "G-S6ZGDE5F37",

  apiKey: "AIzaSyAA5gGKNDtjiJ6E636jIzdgoVHiPeJ9l6A",
  authDomain: "test-c454f.firebaseapp.com",
  projectId: "test-c454f",
  storageBucket: "test-c454f.appspot.com",
  messagingSenderId: "903399312557",
  appId: "1:903399312557:web:fe0eb69f5c9b9bb28c0a24",
  measurementId: "G-DXZXG4C0D9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
