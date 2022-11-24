import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as api from "../app/api";

const initialState = {
    loading: true,
    maxLength: 0,
    posts: [],
    error: "",
};

export const updatePostInPostsMiddleware = (store) => (next) => (action) => {
    if (
        action.type === "post/updatePost/fulfilled" ||
        action.type === "post/likePost/fulfilled" ||
        action.type === "post/favPost/fulfilled"
    ) {
        store.dispatch(updateInPosts(action.payload));
    }

    if (action.type === "post/deletePost/fulfilled") {
        store.dispatch(deleteInPosts(action.payload));
    }

    next(action);
};

export const addPost = createAsyncThunk(
    "posts/addPost",
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.addPost(data);
            console.log(response.data);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async (pageNumber, { rejectWithValue }) => {
        try {
            const response = await api.getPosts(pageNumber);

            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const getMaxPosts = createAsyncThunk("test/getMaxPosts", async () => {
    try {
        const response = await api.getMaxPosts();

        return response.data;
    } catch (err) {
        return err.response.data.message;
    }
});

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        clearPosts: (state) => {
            state.posts = [];
        },
        updateInPosts: (state, action) => {
            const id = action.payload._id;

            state.posts = state.posts.map((post) =>
                post._id === id ? action.payload : post
            );
        },
        deleteInPosts: (state, action) => {
            state.posts = state.posts.filter(
                (post) => post._id !== action.payload._id
            );
        },
    },
    extraReducers: (builder) => {
        /**
         * ADD POST
         */
        builder.addCase(addPost.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(addPost.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = [...state.posts, action.payload];
        });
        builder.addCase(addPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        /**
         * GET POSTS
         */
        builder.addCase(getPosts.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = [...state.posts, ...action.payload];
        });
        builder.addCase(getPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        /**
         * GET NB MAX POSTS
         */
        builder.addCase(getMaxPosts.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(getMaxPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.maxLength = action.payload;
        });
        builder.addCase(getMaxPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { clearPosts, updateInPosts, deleteInPosts } = postsSlice.actions;
export default postsSlice.reducer;
