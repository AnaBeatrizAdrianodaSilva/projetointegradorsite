// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYzYsNcEviMpZyvf1A4iS25HCKCiJEYJg",
  authDomain: "acaosolidaria-site-pi.firebaseapp.com",
  projectId: "acaosolidaria-site-pi",
  storageBucket: "acaosolidaria-site-pi.appspot.com",
  messagingSenderId: "217708420212",
  appId: "1:217708420212:web:888b8826ddc7da11d44521",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
