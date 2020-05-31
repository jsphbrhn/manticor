import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDxftno5bWeFTf9LWyvZLkSYGhSW9dBdhU",
  authDomain: "manticor-72076.firebaseapp.com",
  databaseURL: "https://manticor-72076.firebaseio.com",
  projectId: "manticor-72076",
  storageBucket: "manticor-72076.appspot.com",
  messagingSenderId: "151563652102",
  appId: "1:151563652102:web:9487cbca9d39cf219fc787",
  measurementId: "G-TERENRZ5CN",
});

const db = firebaseApp.firestore();

export { db };
