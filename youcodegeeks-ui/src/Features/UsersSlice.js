import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";
import {formDataConfig} from "@/Api/Config.js";

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
            const response = await axiosClient.post("users", data, formDataConfig);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.errors);
        }
    }
)
export const deleteUser = createAsyncThunk(
    "users/delete",
    async (id, rejectWithValue) => {
        try {
            await axiosClient.delete(`users/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const verifyUser = createAsyncThunk(
    "users/verify",
    async (id, rejectWithValue) => {
        try {
            const response = await axiosClient.get(`users/verify/${id}`);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

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
                console.log(state.users);
            })
            .addCase(createUser.rejected, (state, action) => {
                console.log("user create rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
        builder
            .addCase(verifyUser.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(verifyUser.fulfilled, (state, action) => {
                console.log("verfiy user fulfilled")
                state.loading = false;
                state.users = action.payload
                state.error = "";
                state.response = "";
            })
            .addCase(verifyUser.rejected, (state, action) => {
                console.log("verify users rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
        builder
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.filter(user => user.id !== action.payload)
                state.error = "";
            })
            .addCase(deleteUser.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "operation rejected";
                state.response = action.payload;
            })
    })
});

export default UsersSlice.reducer