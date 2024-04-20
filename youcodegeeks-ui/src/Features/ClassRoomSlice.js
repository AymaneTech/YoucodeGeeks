import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";

const initialState = {
    classRooms: [],
    loading: false,
    error: "",
    response: ""
}
export const getClassrooms = createAsyncThunk(
    "classRooms/get",
    async (rejectWithValue) => {
        try {
            const response = await axiosClient.get("helpers/classrooms");
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)
const classRoomsSlice = createSlice({
    name: "classrooms",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getClassrooms.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getClassrooms.fulfilled, (state, action) => {
                console.log("fulfilled");
                state.loading = false;
                state.classRooms = action.payload;
                state.error = "";
                state.response = "";
            })
            .addCase(getClassrooms.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
    }
})
export default classRoomsSlice.reducer
