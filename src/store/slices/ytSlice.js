
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen:true,
    popularVideo:[],
    recommendedVideo:[],
    nextSetRecommendId: "",
    nextSetId:"",
    autoSuggestionResultRecord:{},
    autoSuggestionData:[],
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
    },
    setRecommendedVideo: (state, action) => {
      state.recommendedVideo = action.payload;
    },
    setNextSetRecommendId: (state, action) => {
      state.nextSetRecommendId = action.payload;
    },
    setAutoSuggestionResultRecord: (state, action) => {
      state.autoSuggestionResultRecord = {...state.autoSuggestionResultRecord, ...action.payload}
    },
    setAutoSuggestionData: (state, action) => {
      state.autoSuggestionData = [...action.payload]
    }
  },

});

export const {
    setPopularVideo,
    setNextSetId,
    setIsSidebarOpen,
    setNextSetRecommendId,
    setRecommendedVideo,
    setAutoSuggestionResultRecord
} = ytSlice.actions;

export default ytSlice.reducer;
