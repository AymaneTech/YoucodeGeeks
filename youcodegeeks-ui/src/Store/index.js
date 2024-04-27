import {configureStore} from "@reduxjs/toolkit";
import classRoomSlice from "@/Features/ClassRooms/ClassRoomSlice.js";
import CategorySlice from "@/Features/Categories/CategorySlice.js";
import TagsSlice from "@/Features/Tags/TagsSlice.js";
import CampusSlice from "@/Features/Campus/CampusSlice.js";
import UsersSlice from "@/Features/Users/UsersSlice.js";
import authSlice from "@/Features/Auth/AuthSlice.js";
import StatisticsSlice from "@/Features/StatisticsSlice.js";
import QuestionSlice from "@/Features/Questions/QuestionSlice.js";
import BlogSlice from "@/Features/Blogs/BlogSlice.js";
import TagInputSlice from "@/Features/TagInputSlice.js";
import LexicalSlice from "@/Features/LexicalSlice.js";
import AnswerSlice from "@/Features/Answers/AnswerSlice.js";

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
        answers: AnswerSlice,
        blogs: BlogSlice,
        tagsInput: TagInputSlice,
        lexicalOutput: LexicalSlice
    }
})
