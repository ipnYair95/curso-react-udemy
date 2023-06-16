// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_sAI4ZWF65R2IoCWwB5JDyh-2BZM6NQg",
    authDomain: "react-cursos-ce8bd.firebaseapp.com",
    projectId: "react-cursos-ce8bd",
    storageBucket: "react-cursos-ce8bd.appspot.com",
    messagingSenderId: "453043776457",
    appId: "1:453043776457:web:81eb1b0c363d799d8bd618"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);