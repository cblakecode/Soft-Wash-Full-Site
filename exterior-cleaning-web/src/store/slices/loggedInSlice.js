import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  persistedData: {},
  isLoggedIn: false,
};

const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState,
  reducers: {
    changeData: (state, action) => {
      state.persistedData = { ...state.persistedData, ...action.payload };
      console.log(state.persistedData);
    },
    originalData: (state, action) => {
      return JSON.parse(localStorage.getItem("userStorage"));
    },
  },
});

export const { changeData, originalData } = loggedInSlice.actions;
export default loggedInSlice.reducer;
