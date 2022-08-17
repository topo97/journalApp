// Proveedores de autenticado:

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './config';


const googleProvider = new GoogleAuthProvider(); // new: al ser una instancia de mi funcion.

// autenticado:
export const singInwithGoogle = async() => {

    try {
        
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credential = GoogleAuthProvider.credentialFromResult( result );
        const user = result.user;
        console.log({ user });


    } catch (error) {
        
        console.log(error);
        
    }
};
