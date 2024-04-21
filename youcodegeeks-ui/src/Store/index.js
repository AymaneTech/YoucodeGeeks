import {configureStore} from "@reduxjs/toolkit";
import userSlice from "@/Features/UserSlice.js";
import classRoomSlice from "@/Features/ClassRoomSlice.js";
import CategorySlice from "@/Features/CategorySlice.js";
import TagsSlice from "@/Features/TagsSlice.js";

export const store = configureStore({
    reducer: {
        user: userSlice,
        classRooms: classRoomSlice,
        categories: CategorySlice,
        tags: TagsSlice

    }
})