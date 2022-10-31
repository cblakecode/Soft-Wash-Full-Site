import { createSlice } from "@reduxjs/toolkit";
import sendQuote from "../actions/sendQuote";
import sendContact from "../actions/sendContact";

const initialState = {
  isSuccess: false,
  isOpen: false,
  alertMessage: "",
};

const snackSlice = createSlice({
  name: "snack",
  initialState,
  reducers: {
    snackClose: (state, action) => {
      state.isSuccess = false;
      state.isOpen = false;
      state.alertMessage = "";
    },
    snackError: (state, action) => {
      state.isOpen = true;
      state.alertMessage = action.payload;
    },
    snackSuccess: (state, action) => {
      state.isSuccess = true;
      state.isOpen = true;
      state.alertMessage = action.payload;
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
      state.isOpen = true;
    },
    [sendQuote.fulfilled]: (state) => {
      state.alertMessage = "Sent";
      state.isSuccess = true;
      state.isOpen = true;
    },
    [sendQuote.rejected]: (state) => {
      state.alertMessage = "Failed to Send";
      state.isOpen = true;
    },
  },
});

const { reducer, actions } = snackSlice;
export const { snackClose, snackError, snackSuccess } = actions;
export default reducer;
