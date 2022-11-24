import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as api from "../app/api";

const initialState = {
    loading: true,
    user: null,
    error: "",
};

export const verify = createAsyncThunk(
    "auth/verify",
    async (token, { rejectWithValue }) => {
        try {
            const response = await api.verify(token);
            localStorage.setItem("token", response.data.token);

            return response.data.result;
        } catch (err) {
            localStorage.removeItem("token");

            return rejectWithValue(err.response.data.message);
        }
    }
);

export const register = createAsyncThunk(
    "auth/register",
    async ({ data, navigate }, { rejectWithValue }) => {
        try {
            const response = await api.register(data);

            localStorage.setItem("token", response.data.token);
            navigate("/");

            return response.data.result;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async ({ data, navigate }, { rejectWithValue }) => {
        try {
            const response = await api.login(data);

            localStorage.setItem("token", response.data.token);
            navigate("/");

            return response.data.result;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const updateUser = createAsyncThunk(
    "user/updateUser",
    async ({ userId, data }, { rejectWithValue }) => {
        try {
            const response = await api.updateUser(userId, data);

            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const updatePassword = createAsyncThunk(
    "user/updatePassword",
    async ({ userId, data }, { rejectWithValue }) => {
        try {
            const response = await api.updatePassword(userId, data);

            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const updateAvatar = createAsyncThunk(
    "user/updateAvatar",
    async ({ userId, data }, { rejectWithValue }) => {
        try {
            const response = await api.updateAvatar(userId, data);

            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state, action) => {
            localStorage.removeItem("token");
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        /**
         * VERIFY
         */
        builder.addCase(verify.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(verify.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(verify.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        /**
         * REGISTER
         */
        builder.addCase(register.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        /**
         * LOGIN
         */
        builder.addCase(login.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        /**
         * UPDATE USER PROFIL
         */
        builder.addCase(updateUser.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;

            toast.success("Profil changé.");
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;

            toast.warn(action.payload);
        });

        /**
         * UPDATE PASSWORD
         */
        builder.addCase(updatePassword.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(updatePassword.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;

            toast.success("Mot de passe changé.");
        });
        builder.addCase(updatePassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;

            toast.warn(action.payload);
        });

        /**
         * UPDATE AVATAR
         */
        builder.addCase(updateAvatar.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(updateAvatar.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(updateAvatar.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
