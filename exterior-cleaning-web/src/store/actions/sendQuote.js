import { createAsyncThunk } from "@reduxjs/toolkit";

const sendQuote = createAsyncThunk(
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
    const response = await fetch("/email/quote", {
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

export default sendQuote;
