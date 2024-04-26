import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";

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
export const showBlog = createAsyncThunk(
    "blogs/show",
    async (slug, rejectWithValue) => {
        try {
             const response = await axiosClient.get(`blogs/${slug}`);
             return response.data.data;
        }catch (error){
            return rejectWithValue(error.response.data.message);
        }
    }
)

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
            })
    }
})

export default blogSlice.reducer;