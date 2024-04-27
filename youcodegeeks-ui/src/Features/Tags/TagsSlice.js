import { createSlice} from "@reduxjs/toolkit";
import {getTags, createTag, updateTag, deleteTag} from "@/Features/Tags/TagsAction.js";

const initialState = {
    tags: [], loading: false, error: "", response: ""
}


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