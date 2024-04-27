import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";
import {formDataConfig} from "@/Api/Config.js";

export const createCategory = createAsyncThunk("categories/create", async (data, rejectWithValue) => {
    try {
        const response = await axiosClient.post("categories", data, formDataConfig);
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.return.data.message);
    }
})
export const updateCategory = createAsyncThunk("categories/update", async (data, rejectWithValue) => {
    try {
        const response = await axiosClient.patch(`categories/${data.slug}`, data.formData, formDataConfig);
        return response.data.data;
    } catch (error) {
        console.log(error.response.data.errors);
        return rejectWithValue(error.response.data.errors);
    }
});
export const deleteCategory = createAsyncThunk("categories/delete", async (slug, rejectWithValue) => {
    try {
        await axiosClient.delete("categories/" + slug);
        return slug;
    }catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

export const getCategories = createAsyncThunk("categories/get", async (rejectWithValue) => {
    try {
        const response = await axiosClient.get("categories");
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})
