import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";

const initialState = {
    statistics: [], loading: false, error: "", response: ""
}

export const getStatistics = createAsyncThunk(
    "tags/get",
    async (rejectWithValue) => {
        try {
            const response = await axiosClient.get("statistics");
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const StatisticsSlice = createSlice({
    name: "statistics",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getStatistics.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getStatistics.fulfilled, (state, action) => {
                console.log("statistics fulfilled");
                state.loading = false;
                state.users = action.payload;
                state.error = "";
                state.response = "";
            })
            .addCase(getStatistics.rejected, (state, action) => {
                console.log("get users rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
    }
})

export default StatisticsSlice.reducer;