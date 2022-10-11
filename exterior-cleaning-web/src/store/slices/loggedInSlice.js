import { createSlice } from "@reduxjs/toolkit";
import { getMemberData } from "../actions/memberCRUD";

const initialState = {
  loginData: {
    _id: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    name: "",
    subscribed: "",
  },
};

const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState,
  reducers: {},
  extraReducers: {
    [getMemberData.fulfilled]: (state, action) => {
      state.loginData = action.payload;
    },
  },
});

export default loggedInSlice.reducer;
