// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADAWatPQOUHCH-Vd1_69oAdKFfEO1HgEI",
  authDomain: "custom-homepage-dc899.firebaseapp.com",
  projectId: "custom-homepage-dc899",
  storageBucket: "custom-homepage-dc899.appspot.com",
  messagingSenderId: "334841707191",
  appId: "1:334841707191:web:43610bd9848a00cb392b32"
};

// Initialize Firebase
export function initializeFirebase() {
  const firebaseApp = initializeApp(firebaseConfig);
}

