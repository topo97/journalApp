

import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers';
import { checkingCredentials, login, logout } from './authSlice';


// MI TAREA  ASINCRONA:
export const checkingAuthentication = ( email, password ) => {
    
    return async( dispatch ) => {

        //debo llamar al dispatch para que se ejecute la accion de checkingCredentials.
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
        dispatch( login( result ));
    }

}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() ); 
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });
        
        if ( !ok ) return dispatch( logout({ errorMessage }) );
        dispatch( login({ uid, displayName, email, photoURL }) );
    }

}


export const startLoginWithEmailPassword = ( {email, password } ) => {
    return async (dispatch) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ));
    }
}

export const startLogout = () => {
    return async( dispatch ) => {

        // tryCatch
        await logoutFirebase();

        dispatch( logout() );
    }
}