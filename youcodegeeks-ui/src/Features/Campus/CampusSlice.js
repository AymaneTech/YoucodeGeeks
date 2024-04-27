import { createSlice} from "@reduxjs/toolkit";
import {getCampus, createCampus, deleteCampus} from "@/Features/Campus/CampusAction.js";

const initialState = {
    campus: [], loading: false, error: "", response: ""
}

const campusSlice = createSlice({
    name: "campus", initialState, extraReducers: (builder) => {
        builder
            .addCase(getCampus.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getCampus.fulfilled, (state, action) => {
                state.loading = false;
                state.campus = action.payload;
                state.error = "";
                state.response = "";
            })
            .addCase(getCampus.rejected, (state, action) => {
                console.log("get campus rejected");
                console.log(action.payload)
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
        builder
            .addCase(createCampus.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(createCampus.fulfilled, (state, action) => {
                state.loading = false;
                state.campus = [...state.campus, action.payload];
                state.error = "";
                state.response = "";
            })
            .addCase(createCampus.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
        builder
            .addCase(deleteCampus.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(deleteCampus.fulfilled, (state, action) => {
                state.loading = false;
                state.campus = state.campus.filter(c => c.slug !== action.payload),
                    state.error = "";
                state.response = "";
            })
            .addCase(deleteCampus.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "operation rejected";
                state.response = action.payload;
            })
    }
})
export default campusSlice.reducer
