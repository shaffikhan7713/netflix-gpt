// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBra6Y1XmbOzAIQyBJrWBpx_SplL9dGE6k",
  authDomain: "netflix-gpt-940ae.firebaseapp.com",
  projectId: "netflix-gpt-940ae",
  storageBucket: "netflix-gpt-940ae.appspot.com",
  messagingSenderId: "9179416602",
  appId: "1:9179416602:web:51513e9e3122f26e2f69a3",
  measurementId: "G-QMS675YK8B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
