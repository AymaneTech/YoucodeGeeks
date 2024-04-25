import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";

const initialState = {
    answers: [],
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
export const getAnswers = createAsyncThunk(
    "answers/get",
    async (id, rejectWithValue) => {
        try {
            const response = await axiosClient.get(`questions/answers/${id}`);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

const AnswersSlice = createSlice({
    name: "answers",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createAnswer.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(createAnswer.fulfilled, (state, action) => {
                state.loading = false;
                state.answers = [...state.answers, action.payload];
            })
            .addCase(createAnswer.rejected, (state, action) => {
                state.loading = false;
            })
        builder
            .addCase(getAnswers.pending, (state, action) => {
                console.log("get answers pending")
                state.loading = true;
            })
            .addCase(getAnswers.fulfilled, (state, action) => {
                console.log(" get answers fulfilled")
                state.loading = false;
                state.answers = action.payload;
            })
            .addCase(getAnswers.rejected, (state, action) => {
                console.log("get answers rejected")
                console.log(action.payload)
                state.loading = false;
            })
    }
})
export default AnswersSlice.reducer;