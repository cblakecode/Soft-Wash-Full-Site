import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  },
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const resetFormData = {
  fullName: "",
  email: "",
  mobile: "",
  message: "",
};

export const sendContact = createAsyncThunk(
  "contact/emailPost",
  async ({ fullName, email, mobile, message }, thunkAPI) => {
    const response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, mobile, message }),
    });
    return response.json();
  }
);

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
