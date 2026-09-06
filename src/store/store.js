import { configureStore } from "@reduxjs/toolkit";
import ytSlice from './slices/ytSlice';
import searchSlice from './slices/searchSlice';
import commentSlice from './slices/commentSlice';
export const store = configureStore({
    reducer: {
        youtube: ytSlice,
        search: searchSlice,
        comment: commentSlice
    }
})