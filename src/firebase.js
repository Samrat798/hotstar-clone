// Import the functions you need from the SDKs you need
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQnXT-JZHqbBdvaiw2LRM322RM8OvsazA",
  authDomain: "disneyplus-clone-2d44a.firebaseapp.com",
  projectId: "disneyplus-clone-2d44a",
  storageBucket: "disneyplus-clone-2d44a.appspot.com",
  messagingSenderId: "58190501080",
  appId: "1:58190501080:web:ce92ba231531cdaacff3ad",
  measurementId: "G-SQDRMBT597",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
