// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC66uUqDR3S3SgyQSFmY7858lEhDnuCOUs",
  authDomain: "todo-practice-31a40.firebaseapp.com",
  projectId: "todo-practice-31a40",
  storageBucket: "todo-practice-31a40.appspot.com",
  messagingSenderId: "448984892015",
  appId: "1:448984892015:web:619055ec783b4e3aa9439a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);