
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen:true,
    popularVideo:[],
    recommendedVideo:[],
    nextSetRecommendId: "",
    nextSetId:"",
}


const ytSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {
    setPopularVideo: (state, action) => {
      state.popularVideo = [...action.payload];
    },
    setNextSetId: (state, action) => {
      state.nextSetId = action.payload;
    },
    setIsSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
    setRecommendedVideo: (state, action) => {
      state.recommendedVideo = action.payload;
    },
    setNextSetRecommendId: (state, action) => {
      state.nextSetRecommendId = action.payload;
    }
  },

});

export const {
    setPopularVideo,
    setNextSetId,
    setIsSidebarOpen,
    setNextSetRecommendId,
    setRecommendedVideo
} = ytSlice.actions;

export default ytSlice.reducer;
