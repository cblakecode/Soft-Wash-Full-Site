import { createSlice } from "@reduxjs/toolkit";
import { signUpMember } from "../actions/memberCRUD";

const initialState = {
  memberData: {
    name: "",
    phone: "",
    email: "",
    address: "",
    username: "",
    password: "",
  },
  confirmPass: "",
  isLoggedIn: false,
  signUpOpen: false,
  isLoading: false,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    confirmPassValue: (state, action) => {
      const value = action.payload;
      state.confirmPass = value;
    },
    changeSignUpData: (state, action) => {
      const value = action.payload;
      state.memberData = { ...state.memberData, ...value };
    },
    toggleSignUp: (state, action) => {
      state.signUpOpen ? (state.signUpOpen = false) : (state.signUpOpen = true);
    },
  },
  extraReducers: {
    [signUpMember.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signUpMember.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      console.log(action.payload);
    },
    [signUpMember.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { changeSignUpData, toggleSignUp, confirmPassValue } =
  signupSlice.actions;
export default signupSlice.reducer;
