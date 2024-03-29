import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  },
  isLogged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    logOut: (state, action) => {
      sessionStorage.clear();
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
