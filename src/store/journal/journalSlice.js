import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     date: 123456,
        //     imageUrls: [], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg 
        // }
    },
    reducers: {  // Las acciones(funciones puras), deben de ser sincrono.
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },       
        
        // nueva entrada
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;

        },
        // /establecer nota activa
        setActiveNote: ( state, action ) => {
            state.active =  action.payload;
        },
        // Cargar Notas
        setNotes: (state, action ) => {
            state.notes = action.payload; 

        },
        // Grabanco la Nota
        setSaving: (state) => {

        },
        // Actualizar Nota
        upDateNote: (stae, payload ) => {

        },
        // Eliminacion
        deleteNoteById: (state, payload ) => {

        },
    }
});


// Action
export const { 
    savingNewNote,
    addNewEmptyNote, 
    setActiveNote, 
    setNotes, 
    setSaving, 
    upDateNote, 
    deleteNoteById  
} = journalSlice.actions;