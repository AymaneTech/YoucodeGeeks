import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient, formDataConfig} from "@/Api/axios.js";
import {getClassrooms} from "@/Features/ClassRoomSlice.js";

const initialState = {
    users: [],
    loading: false,
    error: "",
    response: ""
}
export const getUsers = createAsyncThunk(
    "users/get",
    async (rejectWithValue) => {
        try {
            const response = await axiosClient.get("users");
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const cerateUser = createAsyncThunk(
    "users/create",
    async (data, rejectWithValue) => {
        try {
            const response = await axiosClient.post("users/create", data, formDataConfig);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)

const UsersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: ((builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                console.log("fulfilled");
                state.loading = false;
                state.users = action.payload;
                state.error = "";
                state.response = "";
            })
            .addCase(getUsers.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
    })
});

export default UsersSlice.reducer