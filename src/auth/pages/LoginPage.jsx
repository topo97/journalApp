import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks';
import {  checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';


export const LoginPage = () => {

    const { status, errorMessage } = useSelector( state => state.auth ); 

    const dispatch = useDispatch();
    // campos de texto del formulario:
    const { email, password, onInputChange } = useForm({
        email: '',
        password: ''

    });

    const isAuthenticating = useMemo( () => status === 'checking', [status] );

    // SON TAREAS ASINCRONAS

    // btn login => auth con email y password.
    const onSubmit = ( event ) => {
        event.preventDefault();

        //! No es la accion a despachar.
        dispatch( startLoginWithEmailPassword({ email, password }) );

    }

    // btn google => auth de goolge.
    const onGoogleSignIn = () => {
        
        // console.log('onGoogleSignIn');
        dispatch( startGoogleSignIn() );
    
    }


    return (
            <AuthLayout title="Login">
                <form onSubmit={ onSubmit }>
                        <Grid container>
                            <Grid item xs={ 12 } sx={{ mt: 2}}>
                                <TextField 
                                    label="Correo" 
                                    type="email" 
                                    placeholder='correo@google.com' 
                                    fullWidth  
                                    name="email"
                                    value={ email }
                                    onChange={ onInputChange }
                                />
                            </Grid>

                            <Grid item xs={ 12 } sx={{ mt: 2}}>
                                <TextField 
                                    label="Contraseña" 
                                    type="password" 
                                    placeholder='Contraseña' 
                                    fullWidth
                                    name="password"
                                    value={ password }
                                    onChange={ onInputChange }
                                />
                            </Grid>

                            <Grid 
                                container
                                display={ !!errorMessage ? '': 'none'} // no escribi nada? dispaly vacio, si tengo informacion desaparece. 
                                sx={{ mt: 1 }}
                            >
                                <Grid 
                                    item 
                                    xs={ 12 }
                                    display={ !!errorMessage ? '': 'none'} // no escribi nada? dispaly vacio, si tengo informacion desaparece. 
                                >   
                            <Alert  severity='error' >{ errorMessage }</Alert>
                        </Grid>

                            </Grid>

                            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                                <Grid item xs={ 12 } sm={ 6 }>
                                
                                    <Button 
                                        disabled={ isAuthenticating }
                                        type="submit" 
                                        variant='contained' 
                                        fullWidth>
                                        Login
                                    </Button>
                                
                                </Grid>

                                <Grid item xs={ 12 } sm={ 6 }>
                                    <Button 
                                        disabled={ isAuthenticating }
                                        variant='contained' 
                                        fullWidth
                                        onClick={ onGoogleSignIn }>
                                    
                                        <Google />
                                        <Typography sx={{ ml: 1 }}>Google</Typography>
                                    
                                    </Button>
                                </Grid>
                            </Grid>
                            
                            <Grid container direction='row' justifyContent='end'>
                                <Link component={ RouterLink } to="/auth/register" color='inherit'>
                                    Crear una cuenta
                                </Link>

                            </Grid>
                        </Grid>

                    </form>

            </AuthLayout>

    )
}
