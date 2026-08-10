
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen:true,
    popularVideo:[],
    nextSetId:""
}


const ytSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {
    setPopularVideo: (state, action) => {
       console.log('In setPopularVideo >>', action )
      state.popularVideo = [...action.payload];
    },
    setNextSetId: (state, action) => {
      state.nextSetId = action.payload;
    },
    setIsSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload;
    }
  },
});

export const {
    setPopularVideo,
    setNextSetId,
    setIsSidebarOpen
} = ytSlice.actions;

export default ytSlice.reducer;
