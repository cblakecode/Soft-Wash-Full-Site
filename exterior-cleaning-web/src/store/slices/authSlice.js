import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLogged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      console.log(action.payload);
      return { ...state, ...action.payload };
    },
    logOut: (state, action) => {
      sessionStorage.clear();
      state.isLogged = false;
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
