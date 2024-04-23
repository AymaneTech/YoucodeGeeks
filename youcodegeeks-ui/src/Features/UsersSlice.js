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
export const createUser = createAsyncThunk(
    "users/create",
    async (data, rejectWithValue) => {
        try {
            console.log("user data ", data)
            const response = await axiosClient.post("users", data, formDataConfig);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.errors);
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
                state.loading = false;
                state.users = action.payload;
                state.error = "";
                state.response = "";
            })
            .addCase(getUsers.rejected, (state, action) => {
                console.log("get users rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(createUser.fulfilled, (state, action) => {
                console.log("create user fulfilled");
                state.loading = false;
                state.users = [...state.users, action.payload];
                state.error = "";
                state.response = "";
            })
            .addCase(createUser.rejected, (state, action) => {
                console.log("user create rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
    })
});

export default UsersSlice.reducer