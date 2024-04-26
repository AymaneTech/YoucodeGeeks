import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";
import {formDataConfig} from "@/Api/Config.js";

const initialState = {
    blogs: [],
    blog: {},
    loading: false,
    response: "",
    error: "",
};

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
            const response = await axiosClient.get(`blogs/fitler/${param}`);
            return response.data.data;
        }catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

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
        builder
            .addCase(filterByTag.fulfilled, (state, action) => {
                console.log("filtering blogs by tags");
                state.loading = false;
                state.blogs = action.payload;
            })
    }
})

export default blogSlice.reducer;