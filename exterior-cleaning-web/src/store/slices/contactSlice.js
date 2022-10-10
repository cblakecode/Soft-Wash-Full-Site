import { createSlice } from "@reduxjs/toolkit";
import sendContact from "../actions/sendContact";

const initialState = {
  formData: {
    name: "",
    email: "",
    mobile: "",
    message: "",
  },
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const resetFormData = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    handleInputChange: (state, action) => {
      const target = action.payload;
      state.formData = { ...state.formData, ...target };
    },
    handleClose: (state, action) => {
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: {
    [sendContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [sendContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.formData = resetFormData;
      state.isSuccess = true;
    },
    [sendContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.formData = resetFormData;
      state.isError = true;
    },
  },
});

export const { handleInputChange, handleClose } = contactSlice.actions;
export default contactSlice.reducer;
