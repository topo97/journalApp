import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { Nabvar, SideBar } from '../components';

//  Barra lateral:
const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster' >
            
            <Nabvar  drawerWidth={ drawerWidth } />
            
            
            <SideBar drawerWidth={ drawerWidth } />

            <Box 
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Toolbar />

                { children }

            </Box>
        </Box>
    )
}
