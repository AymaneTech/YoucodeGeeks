import { createSlice} from "@reduxjs/toolkit";
import {Login, Register} from "@/Features/Auth/AuthAction.js"
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

    }
})

export default authSlice.reducer