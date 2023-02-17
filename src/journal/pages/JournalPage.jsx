import { AddOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal/thunks';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {

    const dispatch = useDispatch();
    const { isSaving, active } = useSelector( state => state.journal );


    const onClickNewNote = () => { //al hacer click e nueva nota
        dispatch( startNewNote() )

    }

    return (
        <JournalLayout>

            {
                (!!active)
                    ? <NoteView />  // pantalla notas 
                    : <NothingSelectedView />
            } 


            <IconButton 
                onClick={ onClickNewNote }
                size='large'
                disabled={ isSaving }
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
