// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBZYI1dPgO40zezMqJ66zTx0M9eNa8XzEY",
  authDomain: "mini-blog-bbf46.firebaseapp.com",
  projectId: "mini-blog-bbf46",
  storageBucket: "mini-blog-bbf46.appspot.com",
  messagingSenderId: "780260213075",
  appId: "1:780260213075:web:8eb65116bfccb5eaeaa1a6",
  measurementId: "G-MZPFJ52M78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };

