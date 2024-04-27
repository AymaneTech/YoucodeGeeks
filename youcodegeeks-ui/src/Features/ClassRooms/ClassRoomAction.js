import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";

export const getClassrooms = createAsyncThunk(
    "classRooms/get",
    async (rejectWithValue) => {
        try {
            const response = await axiosClient.get("helpers/classrooms");
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const createClassRooms = createAsyncThunk(
    "classRooms/create",
    async (data, rejectWithValue) => {
        try {
            const response = await axiosClient.post("classrooms", data);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const updateClassRoom = createAsyncThunk(
    "classRooms/update",
    async (data, rejectWithValue) => {
        try {
            const response = await axiosClient.patch(`classrooms/${data.slug}`, data.data);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)
export const deleteClassRoom = createAsyncThunk(
    "classRooms/delete",
    async (slug, rejectWithValue) => {
        try {
            await axiosClient.delete(`classrooms/${slug}`);
            return slug;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);