import { createAsyncThunk } from "@reduxjs/toolkit";
import emailjs from "@emailjs/browser";
import { format } from "date-fns";

const sendQuote = createAsyncThunk(
  "quote/sendQuote",
  async (data, thunkAPI) => {
    data.date = format(new Date(data.date), "MMM do yyyy");
    try {
      const response = await emailjs.send(
        "service_z3uhjdl",
        "template_afe2sh2",
        data,
        "h6mClD3CR1ElhmUG7"
      );
      return response.text;
    } catch (error) {
      return error.text;
    }
  }
);

export default sendQuote;
