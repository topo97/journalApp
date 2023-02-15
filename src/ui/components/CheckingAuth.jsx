import { CircularProgress, Grid, LinearProgress } from '@mui/material';


// Loader de carga
export const CheckingAuth = () => {

    return (
        <Grid
            container
            spacing={ 0 }
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >

            <Grid 
                container
                direction='row'
                justifyContent="center"
            >
                    {/* Loader de carga */}
                    <CircularProgress color="inherit" />
            </Grid>
        </Grid>
    )
}
