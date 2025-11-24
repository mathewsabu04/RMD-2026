// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDm6ahHvSlgmmuD2EVguZQvhCZRvmnxbYQ",
  authDomain: "rmd--2026.firebaseapp.com",
  projectId: "rmd--2026",
  storageBucket: "rmd--2026.firebasestorage.app",
  messagingSenderId: "185874182322",
  appId: "1:185874182322:web:cf21379d613f585f2ad9ab",
  measurementId: "G-5P5WH5E4JY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    const user = result.user;
    window.alert(`Signed in with ${user.email}`);
  } catch (error) {
    window.alert(error.message);
  }
};

export const signOut = async () => {
  try {
    await signOut(auth);
    window.alert("Signed out");
  } catch (error) {
    window.alert(error.message);
  }
};
