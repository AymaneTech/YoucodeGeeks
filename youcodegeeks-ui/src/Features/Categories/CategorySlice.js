import { createSlice} from "@reduxjs/toolkit";
import {getCategories, createCategory, deleteCategory, updateCategory} from "@/Features/Categories/CategoryAction.js";

const initialState = {
    categories: [], loading: false, error: "", response: ""
}

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
                state.categories = state.categories.filter(c => c.slug !== action.payload);
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
