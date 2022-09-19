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
