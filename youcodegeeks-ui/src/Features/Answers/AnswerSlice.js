import { createAnswer, getAnswers} from "@/Features/Answers/AnswerAction.js";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    answers: [],
    loading: false,
    response: "",
    error: "",
};


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