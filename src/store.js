import { configureStore } from '@reduxjs/toolkit';
import  pastSlice  from './redux/pastSlice';
export const store = configureStore({
    reducer: {
        myPast: pastSlice,
    }
})