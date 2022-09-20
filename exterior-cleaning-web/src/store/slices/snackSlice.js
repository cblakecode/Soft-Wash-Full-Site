import { createSlice } from "@reduxjs/toolkit";
import sendQuote from "../actions/sendQuote";
import sendContact from "../actions/sendContact";

const initialState = {
  isError: false,
  isSuccess: false,
  isOpen: false,
};

const snackSlice = createSlice({
  name: "snack",
  initialState,
  reducers: {
    snackClose: (state, action) => {
      state.isError = false;
      state.isSuccess = false;
      state.isOpen = false;
    },
  },
  extraReducers: {
    [sendContact.fulfilled]: (state) => {
      state.isSuccess = true;
      state.isOpen = true;
    },
    [sendContact.rejected]: (state) => {
      state.isError = true;
      state.isOpen = true;
    },
    [sendQuote.fulfilled]: (state) => {
      state.isSuccess = true;
      state.isOpen = true;
    },
    [sendQuote.rejected]: (state) => {
      state.isError = true;
      state.isOpen = true;
    },
  },
});

const { reducer, actions } = snackSlice;
export const { snackClose } = actions;
export default reducer;
