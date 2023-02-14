// Proveedores de autenticado:

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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
};