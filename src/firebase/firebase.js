// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSu7-_qOed7E3NWQ_dSphMIw9417LrQHw",
  authDomain: "filmyverse-a6c3a.firebaseapp.com",
  projectId: "filmyverse-a6c3a",
  storageBucket: "filmyverse-a6c3a.appspot.com",
  messagingSenderId: "212211147649",
  appId: "1:212211147649:web:c752fa5046ed35da733e80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const moviesRef=collection(db,"movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;