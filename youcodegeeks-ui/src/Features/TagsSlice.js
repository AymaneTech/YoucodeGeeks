import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";

const initialState = {
    tags: [], loading: false, error: "", response: ""
}

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

export const tagsSlice = createSlice({
    name: "tags",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getTags.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getTags.fulfilled, (state, action) => {
                state.loading = false;
                state.tags = action.payload;
                state.error = "";
                state.response = "";
            })
            .addCase(getTags.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
        builder
            .addCase(createTag.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(createTag.fulfilled, (state, action) => {
                state.loading = false;
                state.tags = [...state.tags, action.payload];
                state.error = "";
                state.response = "";
            })
            .addCase(createTag.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
        builder
            .addCase(deleteTag.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(deleteTag.fulfilled, (state, action) => {
                state.loading = false;
                state.tags = state.tags.filter(tag => tag.slug !== action.payload),
                    state.error = "";
                state.response = "";
            })
            .addCase(deleteTag.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "operation rejected";
                state.response = action.payload;
            })
        builder
            .addCase(updateTag.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(updateTag.fulfilled, (state, action) => {
                const {id, name, slug} = action.payload;
                state.loading = false;
                state.tags = state.tags.map(tag => {
                    if (tag.id !== id) {
                        return tag;
                    }
                    console.log(action.payload)
                    return {
                        ...tag,
                        name: name,
                        slug: slug,
                    };
                });
                state.error = "";
                state.response = "";
            })
            .addCase(updateTag.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
    }
})

export default tagsSlice.reducer