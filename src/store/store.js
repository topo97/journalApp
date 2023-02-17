import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { journalSlice } from './journal';


//mi reducer
export const store = configureStore({
    reducer: { //mi stor
        auth: authSlice.reducer,
        journal: journalSlice.reducer,
    },
});