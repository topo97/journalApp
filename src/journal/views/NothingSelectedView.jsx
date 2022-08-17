import { Grid, Typography } from '@mui/material';
import { StarOutline } from '@mui/icons-material';


export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={ 0 }
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
            // SX => refiere los estilos y diseños
            // XS => refiere a pantallas pequeñas, medi y grnades
        >
            <Grid item xs={ 12 }>
                {/* Estrella */}
                <StarOutline sx={{ fontSize: 100, color: 'white'}} />
            </Grid>
            <Grid item xs={ 12 }>
                {/* Estrella */}
                <Typography variant='h5' color='white'> Selecciona o crea una nota</Typography>
            </Grid>
        </Grid>
    
    )
}
