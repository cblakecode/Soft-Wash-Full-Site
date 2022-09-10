import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  clientData: {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    squareFeet: null,
    siding: "",
    date: "",
    time: "",
    techQuote: "",
  },
  totalPrice: null,
  unknownInput: "",
  clientInfo: false,
  homeInfo: false,
  calculatedCart: false,
  isOpen: false,
};

const resetData = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  address: "",
  squareFeet: null,
  siding: "",
  date: "",
  time: "",
  techQuote: "",
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
      state.clientInfo = false;
      state.homeInfo = false;
      state.calculatedCart = false;
      state.isOpen = false;
    },
    handleOpenQuote: (state, action) => {
      state.isOpen = true;
      state.clientInfo = true;
    },
    handleHomeInfo: (state, action) => {
      state.clientInfo = false;
      state.homeInfo = true;
    },
    handleCalculateCart: (state, action) => {
      state.homeInfo = false;
      state.calculatedCart = true;
    },
    resetForm: (state) => {
      state.isError = false;
      state.isSuccess = false;
    },
    calculateQuote: (state, action) => {
      const data = state.homeData.sidingMaterial.toLowerCase();
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
  handleCalculateCart,
  handleCloseQuote,
  handleHomeInfo,
  handleOpenQuote,
  calculateQuote,
} = actions;
export default reducer;
