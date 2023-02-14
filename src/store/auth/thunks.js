import { singInWithGoogle } from '../../firebase/providers';
import { checkingCredentials, login, logout } from './authSlice';


// MI TAREA  ASINCRONA:
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

        const result = await singInWithGoogle();
        console.log({result});
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ))
    }

}