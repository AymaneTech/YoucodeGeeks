import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";
import {setToken} from "@/Helpers/auth.js";

const initialState = {
    user: {},
    loading: false,
    error: "",
    response: ""
}

export const Login = createAsyncThunk(
    "user/login",
    async (userCredentials, {rejectWithValue}) => {
        try {
            const response = await axiosClient.post("login", userCredentials);
            setToken(response.data.access_token);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const Register = createAsyncThunk(
    "user/register",
    async (userCredentials, {rejectWithValue}) => {
        try {
            const response = await axiosClient.post("register", userCredentials, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setToken(response.data.access_token);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(Login.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(Login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.error = "";
                state.response = "";
            })
            .addCase(Login.rejected, (state, action) => {
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
        builder
            .addCase(Register.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(Register.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.error = "";
                state.response = "";
            })
            .addCase(Register.rejected, (state, action) => {
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload.errors;
            });

    }
})

export default userSlice.reducer