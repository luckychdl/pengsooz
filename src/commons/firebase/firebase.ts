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
  apiKey: "AIzaSyDUode-3Ahyy5698hB0usCiM23KRpW2gNo",
  authDomain: "pensooz-fire.firebaseapp.com",
  projectId: "pensooz-fire",
  storageBucket: "pensooz-fire.appspot.com",
  messagingSenderId: "1080768406589",
  appId: "1:1080768406589:web:9c7768048dc368a4c1f654",
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
export const dbservice = firebase.firestore();
