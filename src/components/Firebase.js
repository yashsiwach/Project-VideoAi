// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmiParbPV-0g4jAmDGkAjzpOCeeneqVNA",
  authDomain: "videoai-206ff.firebaseapp.com",
  projectId: "videoai-206ff",
  storageBucket: "videoai-206ff.appspot.com",
  messagingSenderId: "261917405435",
  appId: "1:261917405435:web:68b23dff06fc8f01e1005e",
  measurementId: "G-8SWK8ZXE13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);