import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";
import {formDataConfig} from "@/Api/Config.js";

export const createCampus = createAsyncThunk("campus/create", async (data, rejectWithValue) => {
    try {
        const response = await axiosClient.post("campuses", data);
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.return.data.errors);
    }
})
export const updateCampus = createAsyncThunk("campus/update", async (data, rejectWithValue) => {
    try {
        const response = await axiosClient.patch(`campuses/${data.slug}`, data.formData, formDataConfig);
        return response.data.data;
    } catch (error) {
        console.log(error.response.data.errors);
        return rejectWithValue(error.response.data.errors);
    }
});
export const deleteCampus = createAsyncThunk("campus/delete", async (slug, rejectWithValue) => {
    try {
        axiosClient.delete("campuses/" + slug);
        return slug;
    }catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

export const getCampus = createAsyncThunk("campus/get", async (rejectWithValue) => {
    try {
        const response = await axiosClient.get("campuses");
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})
