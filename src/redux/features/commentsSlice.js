import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../app/api";

const initialState = {
    loading: false,
    comments: {},
    error: "",
};

export const addComment = createAsyncThunk(
    "comments/addComment",
    async ({ postId, data }, { rejectWithValue }) => {
        try {
            const response = await api.addComment(postId, data);

            return {
                post: postId,
                comment: response.data,
            };
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const getComments = createAsyncThunk(
    "comments/getComments",
    async (postId, { rejectWithValue }) => {
        try {
            const response = await api.getComments(postId);

            return {
                post: postId,
                comments: response.data,
            };
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const deleteComment = createAsyncThunk(
    "comments/deleteComment",
    async ({ postId, commentId }, { rejectWithValue }) => {
        try {
            await api.deleteComment(postId, commentId);

            return {
                post: postId,
                comment: commentId,
            };
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    extraReducers: (builder) => {
        /**
         * ADD COMMENT
         */
        builder.addCase(addComment.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(addComment.fulfilled, (state, action) => {
            state.loading = false;
            state.comments[action.payload.post] = [
                ...state.comments[action.payload.post],
                action.payload.comment,
            ];
        });
        builder.addCase(addComment.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        /**
         * GET COMMENTS
         */
        builder.addCase(getComments.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(getComments.fulfilled, (state, action) => {
            state.loading = false;
            state.comments[action.payload.post] = action.payload.comments;
        });
        builder.addCase(getComments.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        /**
         * DELETE COMMENT
         */
        builder.addCase(deleteComment.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(deleteComment.fulfilled, (state, action) => {
            state.loading = false;
            state.comments[action.payload.post] = state.comments[
                action.payload.post
            ].filter((comment) => comment._id !== action.payload.comment);
        });
        builder.addCase(deleteComment.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default commentsSlice.reducer;
