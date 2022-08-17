import { singInwithGoogle } from '../../firebase/providers';
import { checkingCredentials } from './authSlice';


// MI TAREA ASINCRONA:
export const checkingAuthentication = ( email, password ) => {
    
    return async( dispatch ) => {

        // necesito llamar al dispatch para que se ejecute la accion de checkingCredentials.
        dispatch( checkingCredentials() );

    }
}

// firebase Provider.
export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = singInwithGoogle();
    
    }

}