import { createSlice} from "@reduxjs/toolkit";
import {getAuthenticatedInfo, Login, logout, Register, updateUserProfile} from "@/Features/Auth/AuthAction.js"
const initialState = {
    user: {},
    loading: false,
    error: "",
    response: ""
}


const authSlice = createSlice({
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
        builder
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false;
                state.user = {};
            })
        builder
            .addCase(getAuthenticatedInfo.fulfilled, (state, action) => {
                console.log("user data came")
                state.loading = false;
                state.user = action.payload;
            });
        builder
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                console.log("update profile successfully")
                state.loading = false;
                state.user = action.payload;
            })

    }
})

export default authSlice.reducer