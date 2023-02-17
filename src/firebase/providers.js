// Proveedores de autenticado:

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
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
        // console.log({email, password, displayName})
        
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        
        // TODO: actualizar el dispalyName en Firebase
        await updateProfile( FirebaseAuth.currentUser, {
            displayName
        } ); 

        return {
            ok: true,
            uid, 
            photoURL,
            email,
            displayName,
        }
        
    } catch (error) {
        
        return { ok: false, errorMessage: error.message }
        
    }
}

export const loginWithEmailPassword = async ({ email, password }) => {

    //! funcion de firebase signInWithEmailAndPassword
    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid,
            photoURL,
            displayName,
        }

    } catch (error) {
        return { 
            ok: false, 
            errorMessage: error.message } //error.message

    }
}

// cerrar sesion
export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}