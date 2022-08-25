import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    handleOpen: (state, action) => {
      state.isOpen = true;
    },
    handleClose: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { handleOpen, handleClose } = modalSlice.actions;

export default modalSlice.reducer;
