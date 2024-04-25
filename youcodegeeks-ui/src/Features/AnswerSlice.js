import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";

const initialState = {
    answers: [],
    question: {},
    loading: false,
    response: "",
    error: "",
};

export const createAnswer = createAsyncThunk(
    "answers/create",
    async (data, rejectWithValue) => {
        try {
            const response = await axiosClient.post("answers", data);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.errors);
        }
    }
)

export const AnswersSlice = createSlice({
    name: "answers",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createAnswer.fulfilled, (state, action) => {
                console.log("i'm in create")
                state.loading = false;
                state.answers = [...state.answers, action.payload];

            })
    }
})
export default AnswersSlice.reducer;