// Import the functions you need from the SDKs you need
import { initializeApp  } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvSWqbyPM4zpxZoPheDwgRs334PEG2Tn8",
    authDomain: "journal-app-de38d.firebaseapp.com",
    projectId: "journal-app-de38d",
    storageBucket: "journal-app-de38d.appspot.com",
    messagingSenderId: "505836244012",
    appId: "1:505836244012:web:5d74d67fb9f438a402d589",
    measurementId: "G-NWJYSCJVP3"
};


// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
//Autenticacion
export const FirebaseAuth =  getAuth( FirebaseApp );
//Acceso a base de datos
export const FirebaseDB   =  getFirestore( FirebaseApp );