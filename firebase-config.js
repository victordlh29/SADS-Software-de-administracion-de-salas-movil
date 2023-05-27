// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export  const firebaseConfig = {
  apiKey: "AIzaSyDMjXF6J288nTwbDogrxDwm_ufqswgUz8I",
  authDomain: "back-sads-mobile.firebaseapp.com",
  projectId: "back-sads-mobile",
  storageBucket: "back-sads-mobile.appspot.com",
  messagingSenderId: "612882252097",
  appId: "1:612882252097:web:615fd60108acff1d4be1c0",
  measurementId: "G-1RRMNF3S7C"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const database = getFirestore()