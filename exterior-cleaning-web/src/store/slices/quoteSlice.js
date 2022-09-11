import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
      date: "",
      time: "",
      techQuote: "",
    },
  },
  totalPrice: null,
  unknownInput: "",
  activeStep: 0,
  isOpen: false,
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
    squareFeet: null,
    siding: "",
    date: "",
    time: "",
    techQuote: "",
  },
};

export const sendQuote = createAsyncThunk(
  "quote/sendQuote",
  async ({
    firstName,
    lastName,
    email,
    mobile,
    address,
    squareFeet,
    siding,
    date,
    time,
    techQuote,
  }) => {
    const response = await fetch("/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        mobile,
        address,
        squareFeet,
        siding,
        date,
        time,
        techQuote,
      }),
    });
    return response.json();
  }
);

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    handleCloseQuote: (state) => {
      state.activeStep = 0;
      state.isOpen = false;
      state.clientData = resetData;
    },
    handleOpenQuote: (state, action) => {
      state.isOpen = true;
    },
    changePersonalValues: (state, action) => {
      const value = action.payload;
      state.clientData.personal = { ...state.clientData.personal, ...value };
    },
    changePropertyValues: (state, action) => {
      const value = action.payload;
      state.clientData.property = { ...state.clientData.property, ...value };
    },
    resetForm: (state) => {
      state.isError = false;
      state.isSuccess = false;
    },
    nextActiveStep: (state, action) => {
      state.activeStep += 1;
    },
    prevActiveStep: (state, action) => {
      state.activeStep -= 1;
    },
    calculateQuote: (state, action) => {
      const data = state.clientData.property.siding.toLowerCase();
      const { clientData } = state;
      switch (data) {
        case "vinyl":
          state.totalPrice = clientData.squareFeet * 0.6;
          break;
        case "stucco":
        case "brick":
          state.totalPrice = clientData.squareFeet * 0.8;
          break;
        case "hardy plank":
          state.totalPrice = clientData.squareFeet * 0.7;
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
    },
    [sendQuote.rejected]: (state, action) => {
      state.isLoading = false;
      state.clientData = resetData;
      state.isError = true;
    },
  },
});

const { actions, reducer } = quoteSlice;
export const {
  handleCloseQuote,
  handleOpenQuote,
  calculateQuote,
  resetForm,
  nextActiveStep,
  prevActiveStep,
  changePersonalValues,
  changePropertyValues,
} = actions;
export default reducer;
