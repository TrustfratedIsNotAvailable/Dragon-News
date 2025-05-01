// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3_SgqCRYHQKH_pWxbTihWm3OuJgndKNM",
  authDomain: "dragon-news-b995c.firebaseapp.com",
  projectId: "dragon-news-b995c",
  storageBucket: "dragon-news-b995c.firebasestorage.app",
  messagingSenderId: "958028169416",
  appId: "1:958028169416:web:7723af587a909073d925fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth};