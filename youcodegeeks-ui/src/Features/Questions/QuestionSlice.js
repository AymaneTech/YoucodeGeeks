import {createSlice} from "@reduxjs/toolkit";
import {getQuestions, createQuestion, showQuestion, searchQuestions} from "@/Features/Questions/QuestionAction.js";

const initialState = {
    questions: [],
    question: {},
    loading: false,
    response: "",
    error: "",
};


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
        builder
            .addCase(createQuestion.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(createQuestion.fulfilled, (state, action) => {
                console.log("question fulfilled")
                state.loading = false;
                state.questions = [...state.questions, action.payload];
                state.error = "";
                state.response = "";
            })
            .addCase(createQuestion.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
        builder
            .addCase(showQuestion.fulfilled, (state, action) => {
                state.loading = false;
                state.question = action.payload;
            })
        builder
            .addCase(searchQuestions.fulfilled, (state, action) => {
                console.log("searching questions successfully");
                state.loading = false;
                state.questions = action.payload;
            })
    }
})

export default questionSlice.reducer;