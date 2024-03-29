import { useSelector } from 'react-redux';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';



export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector( state => state.auth );

    return (
        <Box 
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >   
            <Drawer 
                variant='permanent' //temporal
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>

                    <Typography variant='h6' noWrap component='div'>
                        { displayName }
                    </Typography>

                </Toolbar>
                <Divider />

                <List>
                    {
                        ['Enero','Febrero','Marzo','Abril','Mayo '].map( text => (
                            <ListItem key={ text } disablePadding>
                                <ListItemButton>

                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>

                                    <Grid container>
                                        <ListItemText primary={ text } />
                                        <ListItemText secondary={ 'Lorem im suent irlaine, pepe mujica, a la grande le puse cuca'} />
                                    </Grid>

                                </ListItemButton>

                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>

        </Box>
    )
}
