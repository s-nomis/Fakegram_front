import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import authReducer from "../features/authSlice";
import userReducer from "../features/userSlice";
import searchReducer from "../features/searchSlice";
import postsReducer, {
    updatePostInPostsMiddleware,
} from "../features/postsSlice";
import postReducer from "../features/postSlice";
import commentsReducer from "../features/commentsSlice";

const logger = createLogger();

export default configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        search: searchReducer,
        posts: postsReducer,
        post: postReducer,
        comments: commentsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(updatePostInPostsMiddleware),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
});
