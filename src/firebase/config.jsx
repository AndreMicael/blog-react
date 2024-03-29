
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBZYI1dPgO40zezMqJ66zTx0M9eNa8XzEY",
  authDomain: "mini-blog-bbf46.firebaseapp.com",
  projectId: "mini-blog-bbf46",
  storageBucket: "mini-blog-bbf46.appspot.com",
  messagingSenderId: "780260213075",
  appId: "1:780260213075:web:8eb65116bfccb5eaeaa1a6",
  measurementId: "G-MZPFJ52M78",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

