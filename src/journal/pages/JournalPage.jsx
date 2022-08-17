import { AddOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography> Solo contra el mundo, vamos tirando pa no aflojar </Typography> */}
            <NothingSelectedView />

            {/* Pantalla notas  */}
            {/* <NoteView /> */}

            <IconButton 
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover':{ backgroundColor: 'error.main', opacity: 0.8 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                {/* BTN flotante, rojo */}
                <AddOutlined sx={{ fontSize: 32 }}/>
            </IconButton>
        
        </JournalLayout>

    )
}
