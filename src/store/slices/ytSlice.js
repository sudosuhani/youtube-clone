import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSidebarOpen:true,
    popularVideo:[],
    nextSetId:""
}

const ytSlice = createSlice({
    name:'youtube',
    initialState,
    reducers: {
        setIsSidebarOpen: (state, action) => {
            state.isSidebarOpen = action.payload;
        },
        setPopularVideo: (state, action) => {
            state.popularVideo = [...action.payload];
        },
        setNextSetId: (state, action) => {
            state.nextSetId = action.payload;
        }
    }
})

export const { setIsSidebarOpen, setPopularVideo, setNextSetId } = ytSlice.actions;

export default ytSlice.reducer;