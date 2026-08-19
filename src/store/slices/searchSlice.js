import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  autoSuggestionResultRecord: {},
  autoSuggestionData: [],
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
  },
});

export const {setAutoSuggestionResultRecord, setAutoSuggestionData} = searchSlice.actions;
export default searchSlice.reducer;
