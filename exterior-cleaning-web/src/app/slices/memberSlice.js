import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  memberData: {
    username: "",
    password: "",
    name: "",
    email: "",
    address: "",
    phone: "",
  },
  activeStep: 0,
  isOpen: false,
  accountOpen: null,
  isLoginOpen: false,
  isSignUpOpen: false,
  togglePassView: false,
  isLoading: false,
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    nextStep: (state, action) => {
      state.activeStep++;
    },
    prevStep: (state, action) => {
      state.activeStep--;
    },
    handleDataChange: (state, action) => {
      state.memberData = { ...state.memberData, ...action.payload };
    },
    toggleIsOpen: (state, action) => {
      state.isOpen = true;
      state.isLoginOpen = true;
      state.isSignUpOpen = true;
    },
    toggleIsClosed: (state, action) => {
      return initialState;
    },
    loginOpen: (state, action) => {
      state.isLoginOpen = true;
    },
    signUpOpen: (state, action) => {
      state.isLoginOpen = false;
    },
    showPassword: (state, action) => {
      state.togglePassView
        ? (state.togglePassView = false)
        : (state.togglePassView = true);
    },
    accountOptions: (state, action) => {
      state.accountOpen = action.payload;
    },
  },
  extraReducers: {},
});

export const {
  nextStep,
  prevStep,
  handleDataChange,
  toggleIsClosed,
  toggleIsOpen,
  loginOpen,
  signUpOpen,
  showPassword,
  accountOptions,
} = memberSlice.actions;
export default memberSlice.reducer;
