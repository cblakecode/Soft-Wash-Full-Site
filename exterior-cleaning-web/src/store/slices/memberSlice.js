import { createSlice } from "@reduxjs/toolkit";
import { signUpMember, login, getMemberData } from "../actions/memberCRUD";

const initialState = {
  memberData: {
    username: "",
    password: "",
    name: "",
    email: "",
    address: "",
    phone: "",
  },
  confirmPass: "",
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
      state.member.activeStep++;
    },
    prevStep: (state, action) => {
      state.member.activeStep--;
    },
    handleDataChange: (state, action) => {
      const values = action.payload;
      state.member.memberData = { ...state.member.memberData, ...values };
    },
    handleConfirmChange: (state, action) => {
      state.member.confirmPass = action.payload;
    },
    toggleIsOpen: (state, action) => {
      state.member.isOpen = true;
      state.member.isLoginOpen = true;
      state.member.isSignUpOpen = true;
    },
    toggleIsClosed: (state, action) => {
      state.member.isOpen = false;
      state.member.isLoginOpen = false;
      state.member.isSignUpOpen = false;
      state.member.activeStep = 0;
    },
    loginOpen: (state, action) => {
      state.member.isLoginOpen = true;
    },
    signUpOpen: (state, action) => {
      state.member.isLoginOpen = false;
    },
    showPassword: (state, action) => {
      state.member.togglePassView
        ? (state.member.togglePassView = false)
        : (state.member.togglePassView = true);
    },
  },
  extraReducers: {
    [signUpMember.loading]: (state, action) => {
      state.member.isLoading = true;
    },
    [signUpMember.fulfilled]: (state, action) => {
      state.member.isLoading = false;
    },
    [signUpMember.rejected]: (state, action) => {
      state.member.isLoading = false;
    },
    [login.pending]: (state, action) => {
      state.member.isLoading = true;
    },
    [login.rejected]: (state, action) => {
      state.member.isLoading = false;
    },
    [getMemberData.fulfilled]: (state, action) => {
      state.member.isLoading = false;
      state.member.confirmPass = "";
    },
    [getMemberData.rejected]: (state, action) => {
      state.member.isLoading = false;
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
