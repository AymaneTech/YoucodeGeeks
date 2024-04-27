import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";
import {formDataConfig} from "@/Api/Config.js";

export const getUsers = createAsyncThunk(
    "users/get",
    async (rejectWithValue) => {
        try {
            const response = await axiosClient.get("users");
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const createUser = createAsyncThunk(
    "users/create",
    async (data, rejectWithValue) => {
        try {
            const response = await axiosClient.post("users", data, formDataConfig);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.errors);
        }
    }
)
export const deleteUser = createAsyncThunk(
    "users/delete",
    async (id, rejectWithValue) => {
        try {
            await axiosClient.delete(`users/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const verifyUser = createAsyncThunk(
    "users/verify",
    async (id, rejectWithValue) => {
        try {
            const response = await axiosClient.get(`users/verify/${id}`);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);