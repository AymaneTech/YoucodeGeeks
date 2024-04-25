import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tagsInput: [],
}

export const tagInputSlice = createSlice({
    name: 'tagsInput',
    initialState,
    reducers: {
        addTag: (state, action) => {
            state.tagsInput = [...state.tagsInput, action.payload];
        },
        handleDelete: (state, action) => {
            state.tagsInput = state.tagsInput.filter((tag, index) => index !== action.payload)
        },
        handleDrag: (state, action) => {
            const newTags = action.payload.tags.slice();

            newTags.splice(action.payload.currPos, 1);
            newTags.splice(action.payload.newPos, 0, action.payload.tag);
            state.tagsInput = newTags;
        },
    }
})

export const {
    addTag,
    handleDelete,
    handleDrag,
    getInputTags
} = tagInputSlice.actions
export default tagInputSlice.reducer;