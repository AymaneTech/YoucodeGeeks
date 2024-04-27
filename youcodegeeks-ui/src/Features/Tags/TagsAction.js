import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";

export const getTags = createAsyncThunk(
    "tags/get",
    async (rejectWithValue) => {
        try {
            const response = await axiosClient.get("tags");
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const createTag = createAsyncThunk(
    "tags/tags",
    async (data, rejectWithValue) => {
        try {
            const response = await axiosClient.post("tags", data);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const updateTag = createAsyncThunk(
    "tags/update",
    async (data, rejectWithValue) => {
        try {
            const response = await axiosClient.patch(`tags/${data.slug}`, data.data);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const deleteTag = createAsyncThunk(
    "tag/delete",
    async (slug, rejectWithValue) => {
        try {
            await axiosClient.delete(`tags/${slug}`);
            return slug;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);