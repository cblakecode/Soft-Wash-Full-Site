import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: true,
  isOpen: false,
  currentPage: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleOpen: (state, action) => {
      state.currentPage = action.payload;
      state.isOpen = true;
    },
    handleClose: (state, action) => {
      state.currentPage = null;
      state.isOpen = false;
    },
    toggleLogin: (state) => {
      state.isLogin ? (state.isLogin = false) : (state.isLogin = true);
    },
  },
});

export const { handleClose, handleOpen, toggleLogin } = modalSlice.actions;

export default modalSlice.reducer;
