// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3956e.firebaseapp.com",
  projectId: "mern-blog-3956e",
  storageBucket: "mern-blog-3956e.firebasestorage.app",
  messagingSenderId: "705622277043",
  appId: "1:705622277043:web:93faa6335b24d8088529c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
