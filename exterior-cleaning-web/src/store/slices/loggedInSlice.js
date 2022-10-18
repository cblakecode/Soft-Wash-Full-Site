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
    logout: (state, action) => {
      localStorage.removeItem("userStorage");
      state = initialState;
    },
  },
  extraReducers: {
    [getMemberData.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.persistedData = action.payload;
      localStorage.setItem("userStorage", JSON.stringify(state));
    },
    [signUpMember.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.persistedData = {
        ...state.member.memberData,
        password: "",
      };
      localStorage.setItem("userStorage", JSON.stringify(state));
    },
  },
});

export const { logout } = loggedInSlice.actions;
export default loggedInSlice.reducer;
