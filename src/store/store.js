import { configureStore } from "@reduxjs/toolkit";
import ytSlice from './slices/ytSlice';
import searchSlice from './slices/searchSlice';

export const store = configureStore({
    reducer: {
        youtube: ytSlice,
        search: searchSlice,
    }
})