import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";
import {formDataConfig} from "@/Api/Config.js";

const initialState = {
    categories: [], loading: false, error: "", response: ""
}

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
        builder
            .addCase(createCategory.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                console.log("class rooms fulfilled")
                state.loading = false;
                state.categories = [...state.categories, action.payload];
                state.error = "";
                state.response = "";
            })
            .addCase(createCategory.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
        builder
            .addCase(deleteCategory.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = state.categories.filter(c => c.slug !== action.payload),
                state.error = "";
                state.response = "";
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "operation rejected";
                state.response = action.payload;
            })
    }
})
export default categoriesSlice.reducer
