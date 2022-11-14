import { createSlice } from "@reduxjs/toolkit";
import sendQuote from "../actions/sendQuote";

const initialState = {
  clientData: {
    personal: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      address: "",
    },
    property: {
      squareFeet: "",
      siding: "",
      date: null,
      time: "",
      techQuote: "",
    },
  },
  totalPrice: 0,
  unknownInput: "",
  activeStep: 0,
  isOpen: false,
  isSuccess: false,
  isError: false,
};

const resetData = {
  personal: {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
  },
  property: {
    squareFeet: "",
    siding: "",
    date: null,
    time: "",
    techQuote: "",
  },
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    changePersonalValues: (state, action) => {
      state.clientData.personal = {
        ...state.clientData.personal,
        ...action.payload,
      };
    },
    changePropertyValues: (state, action) => {
      const value = action.payload;
      "squareFeet" in value && !value.squareFeet === ""
        ? (state.clientData.property.squareFeet = parseInt(value.squareFeet))
        : (state.clientData.property = {
            ...state.clientData.property,
            ...value,
          });
    },
    resetForm: (state) => {
      state.isError = false;
      state.isSuccess = false;
    },
    nextActiveStep: (state, action) => {
      state.activeStep += 1;
    },
    prevActiveStep: (state, { payload = 1 }) => {
      state.activeStep -= payload;
    },
    calculateQuote: (state, action) => {
      const data = state.clientData.property.siding;
      const parsedData = state.clientData.property.squareFeet;
      switch (data) {
        case "vinyl":
          state.totalPrice = parsedData * 0.08;
          break;
        case "stucco":
        case "hardy plank":
        case "brick":
          state.totalPrice = parsedData * 0.1;
          break;
        default:
          state.unknownInput = "Invalid input for Siding Material";
          break;
      }
    },
  },
  extraReducers: {
    [sendQuote.pending]: (state, action) => {
      state.isLoading = true;
    },
    [sendQuote.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.clientData = resetData;
      state.isSuccess = true;
      state.activeStep = 0;
      state.isOpen = false;
    },
    [sendQuote.rejected]: (state, action) => {
      state.isLoading = false;
      state.clientData = resetData;
      state.isError = true;
      state.activeStep = 0;
      state.isOpen = false;
    },
  },
});

const { actions, reducer } = quoteSlice;
export const {
  calculateQuote,
  resetForm,
  nextActiveStep,
  prevActiveStep,
  changePersonalValues,
  changePropertyValues,
} = actions;
export default reducer;
