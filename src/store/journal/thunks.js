import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from './journalSlice';
import { loadNotes } from '../../helpers';


// trabajo mis funciones sincronas y hacer la peticon, ya que debe ser asincrono.
export const startNewNote = () => {

    return async( dispatch, getState ) => {

        dispatch( savingNewNote() );

        const { uid } = getState().auth; //obtego uid del user usando getState.

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes`) );  // grabar en firebase, uid user
        const setDocResp = await setDoc(newDoc, newNote );

        // cree el id de mi nota
        newNote.id = newDoc.id;

        //!dispatch
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );
        
        // dispatch( nueva nota)
        

        // dispatch( activar la nota)
    }
}
export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {

        //ui user
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El UID del usuario no existe.')
        
        const notes = await loadNotes(uid);
        dispatch( setNotes( notes ) );

    }
}