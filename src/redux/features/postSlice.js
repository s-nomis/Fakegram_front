import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as api from "../app/api";

const initialState = {
    loading: true,
    post: {},
    error: "",
};

export const getPost = createAsyncThunk(
    "post/getPost",
    async (id, { rejectWithValue }) => {
        try {
            const response = await api.getPost(id);

            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const updatePost = createAsyncThunk(
    "post/updatePost",
    async ({ postId, data }, { rejectWithValue }) => {
        try {
            const response = await api.updatePost(postId, data);

            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const likePost = createAsyncThunk(
    "post/likePost",
    async (postId, { rejectWithValue }) => {
        try {
            const response = await api.likePost(postId);

            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const favPost = createAsyncThunk(
    "post/favPost",
    async (postId, { rejectWithValue }) => {
        try {
            const response = await api.favPost(postId);

            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const deletePost = createAsyncThunk(
    "post/deletePost",
    async (postId, { rejectWithValue }) => {
        try {
            await api.deletePost(postId);

            return {
                _id: postId,
            };
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

const postSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: (builder) => {
        /**
         * GET POST
         */
        builder.addCase(getPost.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(getPost.fulfilled, (state, action) => {
            state.loading = false;
            state.post = action.payload;
        });
        builder.addCase(getPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        /**
         * UPDATE POST
         */
        builder.addCase(updatePost.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(updatePost.fulfilled, (state, action) => {
            state.loading = false;
            state.post = action.payload;
        });
        builder.addCase(updatePost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        /**
         * LIKE POST
         */
        builder.addCase(likePost.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(likePost.fulfilled, (state, action) => {
            state.loading = false;
            state.post = action.payload;
        });
        builder.addCase(likePost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        /**
         * FAV POST
         */
        builder.addCase(favPost.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(favPost.fulfilled, (state, action) => {
            state.loading = false;
            state.post = action.payload;
        });
        builder.addCase(favPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        /**
         * DELETE POST
         */
        builder.addCase(deletePost.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(deletePost.fulfilled, (state, action) => {
            state.loading = false;
            state.post = {};

            toast.success("Publication Supprimée.");
        });
        builder.addCase(deletePost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;

            toast.warn(action.payload);
        });
    },
});

export default postSlice.reducer;
