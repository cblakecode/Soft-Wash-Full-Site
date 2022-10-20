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
  },
  extraReducers: {
    [signUpMember.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signUpMember.fulfilled]: (state, action) => {
      return initialState;
    },
    [signUpMember.rejected]: (state, action) => {
      state.isLoading = false;
      state.memberData.username = initialState.memberData.username;
      state.memberData.password = initialState.memberData.password;
      state.confirmPass = initialState.confirmPass;
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
