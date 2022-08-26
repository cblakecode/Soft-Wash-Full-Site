import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactOpen: false,
  quoteOpen: false,
  loginOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleContactOpen: (state, action) => {
      state.contactOpen = true;
    },
    handleContactClose: (state, action) => {
      state.contactOpen = false;
    },
    handleQuoteOpen: (state, action) => {
      state.quoteOpen = true;
    },
    handleQuoteClose: (state, action) => {
      state.quoteOpen = false;
    },
    handleLoginOpen: (state, action) => {
      state.loginOpen = false;
    },
    handleLoginClose: (state, action) => {
      state.loginOpen = false;
    },
  },
});

export const {
  handleContactOpen,
  handleContactClose,
  handleQuoteOpen,
  handleQuoteClose,
} = modalSlice.actions;

export default modalSlice.reducer;
