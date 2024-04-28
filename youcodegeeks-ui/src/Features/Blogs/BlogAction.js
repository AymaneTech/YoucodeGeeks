import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";
import {formDataConfig} from "@/Api/Config.js";

export const getBlogs = createAsyncThunk(
    "blogs/get",
    async (rejectWithValue) => {
        try {
            const response = await axiosClient.get("blogs");
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const createBlog = createAsyncThunk(
    "blogs/create",
    async (data, rejectWithValue) => {
        try {
            const response = await axiosClient.post("blogs", data, formDataConfig);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.errors);
        }
    }
);
export const showBlog = createAsyncThunk(
    "blogs/show",
    async (slug, rejectWithValue) => {
        try {
            const response = await axiosClient.get(`blogs/${slug}`);
            console.log(response.data.data)
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const filterByTag = createAsyncThunk(
    "blogs/filter",
    async (param ,rejectWithValue) => {
        try {
            const response = await axiosClient.get(`blogs/filter/${param}`);
            console.log(response.data)
            return response.data.data;
        }catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
