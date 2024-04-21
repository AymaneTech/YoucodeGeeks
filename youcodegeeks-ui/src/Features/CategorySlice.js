import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";

const initialState = {
    categories: [], loading: false, error: "", response: ""
}
export const createCategory = createAsyncThunk("category/create", async (data, rejectWithValue) => {
    try {
        const response = await axiosClient.post("helpers/categories", data);
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.return.data.message);
    }
})
export const getCategories = createAsyncThunk("categories/get", async (rejectWithValue) => {
    try {
        const response = await axiosClient.get("helpers/categories");
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})
const categoriesSlice = createSlice({
    name: "categories", initialState, extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
                state.error = "";
                state.response = "";
            })
            .addCase(getCategories.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
    }
})
export default categoriesSlice.reducer
