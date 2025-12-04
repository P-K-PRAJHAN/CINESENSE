import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBB4MAp_Y7b5KKvGFnLqhLxk4SCwEo0LCY",
  authDomain: "cinesense-c180f.firebaseapp.com",
  projectId: "cinesense-c180f",
  storageBucket: "cinesense-c180f.firebasestorage.app",
  messagingSenderId: "891029838096",
  appId: "1:891029838096:web:89a963e72dacf89df22d95",
  measurementId: "G-XCYYM635PR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
