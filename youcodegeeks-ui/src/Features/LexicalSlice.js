import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    output: ""
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveOutput.fulfilled, (state, action) => {
                state.output = action.payload;
            })
    }
})

export default LexicalSlice.reducer