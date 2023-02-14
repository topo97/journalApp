// Proveedores de autenticado:

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';


const googleProvider = new GoogleAuthProvider(); // new: al ser una instancia de mi funcion.

// autenticado:
export const singInWithGoogle = async() => {

    try {
        
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credential = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;
        
        return {
            ok: true,
            // info usuario
            displayName, email, photoURL, uid
        }


    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,
        }
        
    }
}

// User Password:
export const registerUserWithEmailPassword = async ({ email, password, displayName}) => {

    try {
        console.log({email, password, displayName})
        
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        
        // TODO: actualizar el dispalyName en Firebase
        await updateProfile( FirebaseAuth.currentUser, {
            displayName
        } ); // user firebase.

        return {
            ok: true,
            uid, 
            photoURL,
            email,
            displayName,
        }


        
    } catch (error) {
        console.log(error)
        return { ok: false, errorMessage: error.message }
        
    }
}