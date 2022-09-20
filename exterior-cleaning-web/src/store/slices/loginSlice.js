import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  memberData: {
    fullName: "",
    phone: "",
    email: "",
    address: "",
    username: "",
    password: "",
    isLoggedIn: false,
  },
  loginFormData: {
    email_user: "",
    password: "",
  },
  isSignUpOpen: false,
  isLoginOpen: false,
  activeStep: 0,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    nextStep: (state, action) => {
      state.activeStep++;
    },
    prevStep: (state, action) => {
      state.activeStep--;
    },
    handleSignUp: (state, action) => {
      state.isSignUpOpen = true;
      state.isLoginOpen = false;
    },
    handleLogin: (state, action) => {
      state.isLoginOpen = true;
      state.isSignUpOpen = false;
    },
    openMember: (state, action) => {
      state.isLoginOpen = true;
    },
    closeMember: (state, action) => {
      state.isLoginOpen = false;
      state.isSignUpOpen = false;
      state.activeStep = 0;
    },
    changeMemberData: (state, action) => {
      const value = action.payload;
      state.memberData = { ...state.memberData, ...value };
    },
    changeLoginData: (state, action) => {
      const value = action.payload;
      state.loginFormData = { ...state.loginFormData, ...value };
    },
  },
});

export const {
  handleSignUp,
  handleLogin,
  openMember,
  closeMember,
  changeLoginData,
  changeMemberData,
  nextStep,
  prevStep,
} = loginSlice.actions;
export default loginSlice.reducer;
