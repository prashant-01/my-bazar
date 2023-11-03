// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKGHFCU8XX8p0t5vstK8sNwd7LjI0r4U4",
  authDomain: "bazaar-432df.firebaseapp.com",
  projectId: "bazaar-432df",
  storageBucket: "bazaar-432df.appspot.com",
  messagingSenderId: "279548126284",
  appId: "1:279548126284:web:208bd1403b5303afc800e9",
  measurementId: "G-TK0H2ZWRGX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);