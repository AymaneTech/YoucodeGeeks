import { createSlice} from "@reduxjs/toolkit";
import {getUsers, createUser, deleteUser, verifyUser} from "@/Features/Users/UsersAction.js";

const initialState = {
    users: [],
    loading: false,
    error: "",
    response: ""
}


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