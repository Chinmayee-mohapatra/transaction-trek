// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvYE6SKcXqsP15o3xEfcpzEWGovtEKGMQ",
  authDomain: "transaction-app-45002.firebaseapp.com",
  projectId: "transaction-app-45002",
  storageBucket: "transaction-app-45002.appspot.com",
  messagingSenderId: "322170854623",
  appId: "1:322170854623:web:b96896f1a111d1cbdadd6a",
  measurementId: "G-3H4P1B3GVD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
