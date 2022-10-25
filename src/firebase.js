// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { firestore } from "firebase";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

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
const app = initializeApp(firebaseConfig);
const db = firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { app, auth, provider, storage };
export default db;
