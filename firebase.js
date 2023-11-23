// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-HmEkF3zmEHTXebHbLbeE5McAJdALMP4",
  authDomain: "leen-whispers.firebaseapp.com",
  projectId: "leen-whispers",
  storageBucket: "leen-whispers.appspot.com",
  messagingSenderId: "549048401057",
  appId: "1:549048401057:web:a9ef49889710d2689744e0"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}