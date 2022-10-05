import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginFormData: {
    email_user: "",
    password: "",
  },
  isLoginOpen: false,
  activeStep: 0,
  togglePassView: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    showPassword: (state, action) => {
      state.togglePassView
        ? (state.togglePassView = false)
        : (state.togglePassView = true);
    },
    nextStep: (state, action) => {
      state.activeStep++;
    },
    prevStep: (state, action) => {
      state.activeStep--;
    },
    toggleLogin: (state, action) => {
      state.isLoginOpen
        ? (state.isLoginOpen = false)
        : (state.isLoginOpen = true);
    },
    closeMember: (state, action) => {
      state.activeStep = 0;
    },
    changeLoginData: (state, action) => {
      const value = action.payload;
      state.loginFormData = { ...state.loginFormData, ...value };
    },
  },
});

export const {
  toggleLogin,
  closeMember,
  changeLoginData,
  nextStep,
  prevStep,
  showPassword,
} = loginSlice.actions;
export default loginSlice.reducer;
