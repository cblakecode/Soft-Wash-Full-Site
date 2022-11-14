import { createAsyncThunk } from "@reduxjs/toolkit";
import emailjs from "@emailjs/browser";

const sendContact = createAsyncThunk(
  "contact/emailPost",
  async (data, thunkAPI) => {
    try {
      const response = await emailjs.send(
        "service_z3uhjdl",
        "template_ui9e8qo",
        data,
        "h6mClD3CR1ElhmUG7"
      );
      return response.text;
    } catch (error) {
      return error.text;
    }
  }
);

export default sendContact;
