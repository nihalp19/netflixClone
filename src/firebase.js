import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAvCJEROSf-urZtJi1AqWhuRyNkFCYuUCo",
  authDomain: "netflix-clone-50223.firebaseapp.com",
  projectId: "netflix-clone-50223",
  storageBucket: "netflix-clone-50223.appspot.com",
  messagingSenderId: "419175743248",
  appId: "1:419175743248:web:0c04b8f4ff1df16f336f95"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 
export const db  = getFirestore(app)