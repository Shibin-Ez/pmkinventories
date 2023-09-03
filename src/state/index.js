import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    token: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.token = false;
        },
    },
});

export const {setLogin, setLogout} = authSlice.actions;
export default authSlice.reducer;