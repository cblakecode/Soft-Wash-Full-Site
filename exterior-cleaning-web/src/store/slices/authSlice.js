import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlice.reducer;
