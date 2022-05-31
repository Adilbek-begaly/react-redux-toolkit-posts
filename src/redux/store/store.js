import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../../features/posts/postsSlice";
import todoSlice from "../features/todos/todoSlice";
import userSlice from "../features/user/userSlice";


export const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSlice,
        post: postsSlice,
    },
})