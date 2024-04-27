import { createSlice} from "@reduxjs/toolkit";
import {getBlogs, showBlog, createBlog, filterByTag, } from "@/Features/Blogs/BlogAction.js";

const initialState = {
    blogs: [],
    blog: {},
    loading: false,
    response: "",
    error: "",
};


export const blogSlice = createSlice({
    name: "blogs",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getBlogs.pending, (state, action) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getBlogs.fulfilled, (state, action) => {
                console.log("get blogs fulfilled ")

                state.loading = false;
                state.error = "";
                state.blogs = action.payload;
            })
            .addCase(getBlogs.rejected, (state, action) => {
                console.log("get blogs rejected")
            })
        builder
            .addCase(showBlog.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(showBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.blog = action.payload;
            });
        builder
            .addCase(createBlog.pending, (state, action) => {
                console.log("create blog pending");
                state.loading = true;
            })
            .addCase(createBlog.fulfilled, (state, action) => {
                console.log("create blog fulfilled ")
                state.loading = false;
                state.blogs = [...state.blogs, action.payload];
            })
            .addCase(createBlog.rejected, (state, action) => {
                console.log("create blog rejected");
                state.error = "Incorrect information";
                state.response = action.payload;
            })
    }
})

export default blogSlice.reducer;