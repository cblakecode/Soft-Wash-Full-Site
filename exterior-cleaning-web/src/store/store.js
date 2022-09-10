import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import contactReducer from "./slices/contactSlice";
import quoteReducer from "./slices/quoteSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    contact: contactReducer,
    quote: quoteReducer,
  },
});
