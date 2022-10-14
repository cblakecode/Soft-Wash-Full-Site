import { createSlice } from "@reduxjs/toolkit";
import { signUpMember } from "../actions/memberCRUD";

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
  isLoggedIn: false,
};

const resetData = {
  id: "",
  username: "",
  password: "",
  name: "",
  email: "",
  address: "",
  phone: "",
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
      state.confirmPass = action.payload;
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
      state.isLoading = true;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [getMemberData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.memberData = resetData;
      state.confirmPass = "";
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
