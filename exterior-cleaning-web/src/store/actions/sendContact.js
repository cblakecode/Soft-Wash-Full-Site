import { createAsyncThunk } from "@reduxjs/toolkit";

const sendContact = createAsyncThunk(
  "contact/emailPost",
  async ({ fullName, email, mobile, message }, thunkAPI) => {
    const response = await fetch("/email/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, mobile, message }),
    });
    return response.json();
  }
);

export default sendContact;
