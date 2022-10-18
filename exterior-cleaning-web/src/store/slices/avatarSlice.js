import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  anchorElUser: null,
  settings: false,
};

const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    closeAnchorElUser: (state, action) => {
      state.anchorElUser = null;
    },
    setAnchorElUser: (state, action) => {
      state.anchorElUser = action.payload;
    },
    toggleSettings: (state, action) => {
      state.settings ? (state.settings = false) : (state.settings = true);
    },
  },
});

export const { closeAnchorElUser, setAnchorElUser, toggleSettings } =
  avatarSlice.actions;
export default avatarSlice.reducer;
