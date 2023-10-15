import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import jwt_decode from 'jwt-decode'

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (params) => {
    try {
        const { data } = await axios.post("/user/login", params)
        return jwt_decode(data.token);
    }

    catch (e) {
        alert("Неверно введен логин или пароль")
    }


});
const initialState = {
    data: null,
    status: "loading",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},

    extraReducers: {
        [fetchAuth.pending]: (state) => {
            state.status = "loading";
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = "loaded";
        },
        [fetchAuth.rejected]: (state) => {
            state.data = null;
            state.status = "error";
        },
    },
});
export const selectIsAuth = (state) => Boolean(state.auth.data)

export const authReducer = authSlice.reducer;
