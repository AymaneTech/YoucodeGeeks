import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";

const initialState = {
    questions: [],
    loading: false,
    response: "",
    error: "",
};

export const getQuestions = createAsyncThunk(
    "questions/get",
    async (rejectWithValue) => {
        try {
            const response = await axiosClient.get("questions");
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const questionSlice = createSlice({
    name: "questions",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getQuestions.pending, (state, action) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getQuestions.fulfilled, (state, action) => {
                console.log("get questions fulfilled ")
                state.loading = false;
                state.error = "";
                state.questions = action.payload;
            })
            .addCase(getQuestions.rejected, (state, action) => {
                console.log("get questions rejected")
            })
    }
})

export default questionSlice.reducer;