import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";
import {setToken} from "@/Helpers/functions.js";
import {formDataConfig} from "@/Api/Config.js";

export const Login = createAsyncThunk(
    "user/login",
    async (userCredentials, {rejectWithValue}) => {
        try {
            const response = await axiosClient.post("login", userCredentials);
            localStorage.setItem("user", JSON.stringify(response.data.user));
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
            const response = await axiosClient.post("register", userCredentials, formDataConfig);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            setToken(response.data.access_token);

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)