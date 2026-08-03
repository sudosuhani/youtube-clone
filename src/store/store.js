import { configureStore } from "@reduxjs/toolkit";
import ytSlice from "./slices/ytSlice";

export const store = configureStore({
    reducer: ytSlice
})