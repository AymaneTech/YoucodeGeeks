import {configureStore} from "@reduxjs/toolkit";
import userSlice from "@/Features/UserSlice.js";
import classRoomSlice from "@/Features/ClassRoomSlice.js";

export const store = configureStore({
    reducer: {
        user: userSlice,
        classRooms: classRoomSlice,

    }
})