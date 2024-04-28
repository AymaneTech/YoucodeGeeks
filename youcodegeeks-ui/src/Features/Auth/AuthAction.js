import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";
import {autheticate, logoutUser} from "@/Helpers/functions.js";
import {formDataConfig} from "@/Api/Config.js";

export const Login = createAsyncThunk("user/login", async (userCredentials, {rejectWithValue}) => {
    try {
        const response = await axiosClient.post("login", userCredentials);
        autheticate(response.data.access_token, response.data.user)
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

export const Register = createAsyncThunk("user/register", async (userCredentials, {rejectWithValue}) => {
    try {
        const response = await axiosClient.post("register", userCredentials, formDataConfig);
        autheticate(response.data.access_token, response.data.user)
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
export const logout = createAsyncThunk("user/logout", async () => {
    try {
        await axiosClient.post("logout");
        logoutUser()
    } catch (error) {
        return error.response.data.message;
    }
})

export const getAuthenticatedInfo = createAsyncThunk("user/getAuthenticatedInfo", async (id, {rejectWithValue}) => {
    try {
        const response = await axiosClient.get(`profile/${id}`);
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})
export const updateUserProfile = createAsyncThunk(
    "user/updateProfile",
    async ({id, formData}, {rejectWithValue}) => {
        try {
            const response = await axiosClient.post(`profile/${id}/?__method=PATCH`, formData, formDataConfig);
            return response.data.data;
        }catch(error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)
