import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  isLogged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      return action.payload;
    },
    logOut: (state, action) => {
      return initialState;
    },
    loggedIn: (state) => {
      state.isLogged = true;
    },
  },
});

export const { setCredentials, logOut, loggedIn } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;

export const selectCurrentToken = (state) => state.auth.token;
