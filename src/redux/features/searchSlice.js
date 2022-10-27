import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../app/api";

const initialState = {
    loading: false,
    users: [],
    error: "",
};

export const search = createAsyncThunk(
    "search/search",
    async (username, { rejectWithValue }) => {
        try {
            const response = await api.getUsers(username);

            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        clearSearch: (state, action) => {
            state.users = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(search.pending, (state, action) => {
            state.loading = true;
            state.users = [];
            state.error = "";
        });
        builder.addCase(search.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(search.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
