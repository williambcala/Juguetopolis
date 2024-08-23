import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    email: null,
    uid: null,
    accessToken: null,
    error: null
}

export const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            state.email = action.payload.email
            state.uid = action.payload.uid
            state.accessToken = action.payload.accessToken
            state.error = action.payload.error
        },
        signIn: (state, action) => {
            state.email = action.payload.email
            state.uid = action.payload.uid
            state.accessToken = action.payload.accessToken
            state.error = action.payload.error
        },
        logOut: (state) => {
            state.email = null
            state.uid = null
            state.accessToken = null
            state.error = null
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
})

export const { register, signIn, logOut, checkingCredentials } = authSlice.actions
export default authSlice.reducer;