// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6OIo-5dMCE9dzy-n-pugKt5NW1Mkq79k",
  authDomain: "drusman.firebaseapp.com",
  projectId: "drusman",
  storageBucket: "drusman.appspot.com",
  messagingSenderId: "311495656493",
  appId: "1:311495656493:web:cc3ee776757418a868a4a4",
  measurementId: "G-XR3TG5SRW8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
