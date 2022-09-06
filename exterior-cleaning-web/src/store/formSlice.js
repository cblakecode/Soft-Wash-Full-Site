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

export const emailPost = createAsyncThunk(
  "contact/emailPost",
  async ({ fullName, email, mobile, message }, thunkAPI) => {
    const response = await fetch("/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, mobile, message }),
    });
    return response.json();
  }
);

const formSlice = createSlice({
  name: "form",
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
    [emailPost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [emailPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.formData = resetFormData;
      state.isSuccess = true;
    },
    [emailPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.formData = resetFormData;
      state.isError = true;
    },
  },
});

export const { handleInputChange, handleClose } = formSlice.actions;
export default formSlice.reducer;
