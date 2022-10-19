import { createSlice } from "@reduxjs/toolkit";
import { signUpMember, login, getMemberData } from "../actions/memberCRUD";

const initialState = {
  memberData: {
    id: "",
    username: "",
    password: "",
    name: "",
    email: "",
    address: "",
    phone: "",
  },
  confrimPass: "",
  activeStep: 0,
  isOpen: false,
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
      const values = action.payload;
      state.memberData = { ...state.memberData, ...values };
    },
    handleConfirmChange: (state, action) => {
      state.confirmPass = action.payload;
    },
    toggleIsOpen: (state, action) => {
      state.isOpen = true;
      state.isLoginOpen = true;
      state.isSignUpOpen = true;
    },
    toggleIsClosed: (state, action) => {
      state.isOpen = false;
      state.isLoginOpen = false;
      state.isSignUpOpen = false;
      state.activeStep = 0;
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
  },
  extraReducers: {
    [signUpMember.loading]: (state, action) => {
      state.isLoading = true;
    },
    [signUpMember.fulfilled]: (state, action) => {
      return initialState;
    },
    [signUpMember.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [getMemberData.fulfilled]: (state, action) => {
      return initialState;
    },
    [getMemberData.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {
  nextStep,
  prevStep,
  handleConfirmChange,
  handleDataChange,
  toggleIsClosed,
  toggleIsOpen,
  loginOpen,
  signUpOpen,
  showPassword,
} = memberSlice.actions;
export default memberSlice.reducer;
