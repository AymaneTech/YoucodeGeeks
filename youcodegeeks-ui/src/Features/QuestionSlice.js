import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";
import {formDataConfig} from "@/Api/Config.js";

const initialState = {
    questions: [],
    question: {},
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
export const createQuestion = createAsyncThunk(
    "questions/create",
    async (data, rejectWithValue) => {
        try {
            const response = await axiosClient.post("questions", data, formDataConfig);
            console.log(response.data.data);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.errors);
        }

    }
)
export const showQuestion = createAsyncThunk(
    "questions/show",
    async (slug, rejectWithValue) => {
        try {
            const response = await axiosClient.get(`questions/${slug}`);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)


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
    }
})

export default questionSlice.reducer;