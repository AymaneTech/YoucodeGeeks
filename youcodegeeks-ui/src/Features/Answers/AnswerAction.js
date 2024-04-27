import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";

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