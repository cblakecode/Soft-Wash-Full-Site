import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  target: null,
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    targetScroll: (state, action) => {
      state.target = action.payload;
    },
    resetScroll: (state) => {
      return initialState;
    },
  },
});

export const { targetScroll, resetScroll } = scrollSlice.actions;
export default scrollSlice.reducer;
