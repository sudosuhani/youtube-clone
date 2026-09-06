import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    topLevelComment: [],
    nextSetTopLevelCommentId: ''
}

const commentSlice = createSlice({
    name:'comment',
    initialState,
    reducers: {
        setTopLevelComment: (state, action) => {
            state.topLevelComment = [...action.payload]
        },
        setNextSetTopLevelCommentId: (state, action) => {
            state.nextSetTopLevelCommentId = action.payload;
        }
    }
})


export const {setNextSetTopLevelCommentId, setTopLevelComment} = commentSlice.actions;
export default commentSlice.reducer;