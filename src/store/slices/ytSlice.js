import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSidebarOpen:true,
}

const ytSlice = createSlice({
    name:'youtube',
    initialState,
    reducers: {
        setIsSidebarOpen: (state, action) => {
            state.isSidebarOpen = action.payload;
        }
    }
})

export const { setIsSidebarOpen } = ytSlice.actions;

export default ytSlice.reducer;