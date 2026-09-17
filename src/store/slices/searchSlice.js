import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  autoSuggestionResultRecord: {},
  autoSuggestionData: [],
  searchQuery:'',
  isShowAutoSuggestion:false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setAutoSuggestionResultRecord: (state, action) => {
      state.autoSuggestionResultRecord = {
        ...state.autoSuggestionResultRecord,
        ...action.payload,
      };
    },
    setAutoSuggestionData: (state, action) => {
      state.autoSuggestionData = [...action.payload];
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setIsShowAutoSuggestion: (state, action) => {
      state.isShowAutoSuggestion = action.payload;
    }
  },
});

export const {setAutoSuggestionResultRecord, setAutoSuggestionData, setSearchQuery, setIsShowAutoSuggestion} = searchSlice.actions;
export default searchSlice.reducer;
