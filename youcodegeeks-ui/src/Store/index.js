import {configureStore} from "@reduxjs/toolkit";
import userSlice from "@/Features/UserSlice.js";

export const store = configureStore({
    reducer: {
        user: userSlice,

    }
})