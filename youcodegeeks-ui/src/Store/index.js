import {configureStore} from "@reduxjs/toolkit";
import classRoomSlice from "@/Features/ClassRoomSlice.js";
import CategorySlice from "@/Features/CategorySlice.js";
import TagsSlice from "@/Features/TagsSlice.js";
import CampusSlice from "@/Features/CampusSlice.js";
import UsersSlice from "@/Features/UsersSlice.js";
import authSlice from "@/Features/AuthSlice.js";
import StatisticsSlice from "@/Features/StatisticsSlice.js";
import QuestionSlice from "@/Features/QuestionSlice.js";
import BlogSlice from "@/Features/BlogSlice.js";

export const store = configureStore({
    reducer: {
        user: authSlice,
        classRooms: classRoomSlice,
        categories: CategorySlice,
        tags: TagsSlice,
        campus: CampusSlice,
        users: UsersSlice,
        statistics: StatisticsSlice,
        questions: QuestionSlice,
        blogs: BlogSlice,
    }
})