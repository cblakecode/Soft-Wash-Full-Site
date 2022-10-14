import { createSlice } from "@reduxjs/toolkit";
import { getMemberData, signUpMember } from "../actions/memberCRUD";

const initialState = {
  persistedData: {},
  isLoggedIn: false,
};

const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState,
  reducers: {
    getLocalData: (state, action) => {
      state.loggedIn.persistedData = action.payload;
    },
  },
  extraReducers: {
    [getMemberData.fulfilled]: (state, action) => {
      state.loggedIn.isLoggedIn = true;
      state.loggedIn.persistedData = action.payload;
    },
    [signUpMember.fulfilled]: (state, action) => {
      state.loggedIn.isLoggedIn = true;
      state.loggedIn.persistedData = {
        ...state.member.memberData,
        password: "",
      };
    },
  },
});

export const { getLocalData } = loggedInSlice.actions;
export default loggedInSlice.reducer;
