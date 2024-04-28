import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";
import {formDataConfig} from "@/Api/Config.js";

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
export const searchQuestions = createAsyncThunk(
    "questions/search",
    async (param, rejectWithValue) => {
        try {
            const response = await axiosClient.post(`questions/search`, param);
            return response.data.data;
        }catch (error){
            rejectWithValue(error.response.data.message);
        }
    }
)
