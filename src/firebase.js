// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAopuChe5LYrBq5By4eXcqEbfvEbAkKDKk",
  authDomain: "realtor-clone-react-31a60.firebaseapp.com",
  projectId: "realtor-clone-react-31a60",
  storageBucket: "realtor-clone-react-31a60.appspot.com",
  messagingSenderId: "1079827775983",
  appId: "1:1079827775983:web:738245ec149fb51751361a",
  measurementId: "G-3XJQF3LQ2S"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();