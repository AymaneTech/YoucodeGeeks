import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    output: null
}

export const saveOutput = createAsyncThunk(
    "LexicalSlice",
    async (data, rejectWithValue) => {
        return data;
    }
)

export const LexicalSlice = createSlice({
    name: "LexicalSlice",
    initialState,
    reducers: {
        // You can add other reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveOutput.fulfilled, (state, action) => {

                state.output = action.payload;
            })
        // You can handle other cases (pending, rejected) here if needed
    }
})

export default LexicalSlice.reducer