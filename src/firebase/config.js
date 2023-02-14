// Import the functions you need from the SDKs you need
import { initializeApp  } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqLNHzhHmewwLxqMJIu49nOjo9jS28hms",
    authDomain: "journal-app-da7ef.firebaseapp.com",
    projectId: "journal-app-da7ef",
    storageBucket: "journal-app-da7ef.appspot.com",
    messagingSenderId: "1628309863",
    appId: "1:1628309863:web:812100ed6a48ce534487c2"
};


// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
//Autenticacion
export const FirebaseAuth =  getAuth( FirebaseApp );
//Acceso a base de datos
export const FirebaseDB   =  getFirestore( FirebaseApp );