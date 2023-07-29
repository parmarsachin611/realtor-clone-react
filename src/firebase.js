// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWFApBADsHtkiVKcCCgJC4r2-TG4ykg78",
  authDomain: "realtor-clone-react-fe7d7.firebaseapp.com",
  projectId: "realtor-clone-react-fe7d7",
  storageBucket: "realtor-clone-react-fe7d7.appspot.com",
  messagingSenderId: "782813385514",
  appId: "1:782813385514:web:5856172c08978143748453",
  measurementId: "G-TKC1NM3FJ1",
  experimentalForceLongPolling: true, // this line
  useFetchStreams: false, // and this line
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

