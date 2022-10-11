import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions/memberCRUD";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: "",
  },
  reducers: {
    handleAccess: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      console.log(action);
      state.accessToken = action.payload;
    },
  },
});

export const { handleAccess } = authSlice.actions;
export default authSlice.reducer;
