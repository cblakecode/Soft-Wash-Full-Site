import { createSlice } from "@reduxjs/toolkit";
import { getMemberData, logout } from "../actions/memberCRUD";

const initialState = {
  persistedData: {},
  isLoggedIn: false,
};

const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState,
  reducers: {},
  extraReducers: {
    [getMemberData.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.persistedData = action.payload;
      localStorage.setItem("userStorage", JSON.stringify(state));
    },
    [logout.fulfilled]: (state, action) => {
      localStorage.removeItem("userStorage");
      state = initialState;
      window.location.reload();
    },
    [logout.rejected]: (state, action) => {},
  },
});

export default loggedInSlice.reducer;
