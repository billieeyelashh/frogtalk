import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGEn0j2VQWIER4-zWp6KOu_TZHWep-wx0",
  authDomain: "frogchat-a2e17.firebaseapp.com",
  databaseURL: "https://frogchat-a2e17.firebaseio.com",
  projectId: "frogchat-a2e17",
  storageBucket: "frogchat-a2e17.appspot.com",
  messagingSenderId: "1050693076454",
  appId: "1:1050693076454:web:419a7aedf279d58a350227",
  measurementId: "G-KME3L3FCL3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};

export default db;

