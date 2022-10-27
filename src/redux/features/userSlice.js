import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../app/api";

const initialState = {
    loading: true,
    user: null,
    error: "",
};

export const getUserByUsername = createAsyncThunk(
    "user/getUserByUsername",
    async (username, { rejectWithValue }) => {
        try {
            const response = await api.getUserByUsername(username);

            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        /**
         * GET USER BY USERNAME
         */
        builder.addCase(getUserByUsername.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(getUserByUsername.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(getUserByUsername.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default userSlice.reducer;
