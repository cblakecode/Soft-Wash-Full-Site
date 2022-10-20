import { createSlice } from "@reduxjs/toolkit";
import sendQuote from "../actions/sendQuote";
import sendContact from "../actions/sendContact";
import { signUpMember, login, logout } from "../actions/memberCRUD";

const initialState = {
  isError: false,
  isSuccess: false,
  isOpen: false,
  alertMessage: "",
};

const snackSlice = createSlice({
  name: "snack",
  initialState,
  reducers: {
    snackClose: (state, action) => {
      state.isError = false;
      state.isSuccess = false;
      state.isOpen = false;
      state.alertMessage = "";
    },
  },
  extraReducers: {
    [sendContact.fulfilled]: (state) => {
      state.alertMessage = "Message Sent";
      state.isSuccess = true;
      state.isOpen = true;
    },
    [sendContact.rejected]: (state) => {
      state.alertMessage = "Message Failed";
      state.isError = true;
      state.isOpen = true;
    },
    [sendQuote.fulfilled]: (state) => {
      state.alertMessage = "Sent";
      state.isSuccess = true;
      state.isOpen = true;
    },
    [sendQuote.rejected]: (state) => {
      state.alertMessage = "Failed to Send";
      state.isError = true;
      state.isOpen = true;
    },
    [signUpMember.fulfilled]: (state, action) => {
      state.alertMessage = "Account Created";
      state.isSuccess = true;
      state.isOpen = true;
    },
    [signUpMember.rejected]: (state, action) => {
      state.alertMessage = action.payload;
      state.isError = true;
      state.isOpen = true;
    },
    [login.fulfilled]: (state, action) => {
      state.alertMessage = "Welcome Back!";
      state.isSuccess = true;
      state.isOpen = true;
    },
    [login.rejected]: (state, action) => {
      state.alertMessage = action.payload;
      state.isError = true;
      state.isOpen = true;
    },
    [logout.fulfilled]: (state, action) => {
      state.alertMessage = "Logged Out, Goodbye!";
      state.isSuccess = true;
      state.isOpen = true;
    },
  },
});

const { reducer, actions } = snackSlice;
export const { snackClose } = actions;
export default reducer;
