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
      state.formData = action.payload;
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

export const { handleInputChange } = contactSlice.actions;
export default contactSlice.reducer;
