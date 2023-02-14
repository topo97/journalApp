import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from '../../hooks';

import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';



const formDate = {
    email: '',
    password: '',
    displayName: '',
}

// validacion personalsada:
const formValidations = {
    email: [ (value) => value.includes('@'), 'El correro debe tener una @'],
    password: [ (value) => value.length >= 6, 'El password debe tener mas de 6 letras.'],
    displayName: [ (value) => value.length >= 1, 'El nombre es importante.']
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted ] = useState(false);


    // mi hook ase encarga de la validacion;
    const { 
        formState, displayName, email, password, onInputChange, 
        isFormValid, displayNameValid, emailValid, passwordValid,
    } = useForm( formDate, formValidations );


    // console.log( displayNameValid)
    
    // coneccion formulario
    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
    
        // if ( !isFormValid) return;

        dispatch( startCreatingUserWithEmailPassword( formState) )
    }

    return (
        <AuthLayout title="Crear cuenta">
            {/* <h1>FormValid: { isFormValid ? 'Válido' : 'Incorrecto'  } </h1> */}
            <form onSubmit={ onSubmit }>
                <Grid container>

                    <Grid item xs={ 12 } sx={{ mt: 2}}>
                        <TextField 
                            label="Nombre completo" 
                            type="text" 
                            placeholder='nombre' 
                            fullWidth  
                            name="displayName"
                            value={displayName}
                            onChange={ onInputChange }
                            error={ !!displayNameValid && formSubmitted }
                            helperText={ displayNameValid }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2}}>
                        <TextField 
                            label="Correo" 
                            type="email" 
                            placeholder='correo@google.com' 
                            fullWidth  
                            name="email"
                            value={email}
                            onChange={ onInputChange }  
                            error={ !!emailValid && formSubmitted }
                            helperText={ emailValid }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2}}>
                        <TextField 
                            label="Contraseña" 
                            type="password" 
                            placeholder='Contraseña' 
                            fullWidth
                            name="password"
                            value={password}
                            onChange={ onInputChange }
                            error={ !!passwordValid && formSubmitted }
                            helperText={ passwordValid }
                        />
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={ 12 }>
                                
                            <Button 
                                type="submit"
                                variant='contained' 
                                fullWidth>
                                Crear cuenta
                            </Button>  
                        </Grid>                        
                    </Grid>
                            
                        <Grid container direction='row' justifyContent='end'>
                            <Typography sx={{ mr: 1 }}> ¿Ya tienes cuenta? </Typography>
                            <Link component={ RouterLink } color='inherit' to="/auth/login">
                                ingresar
                            </Link>

                        </Grid>
                    </Grid>

            </form>

            </AuthLayout>

    )
}