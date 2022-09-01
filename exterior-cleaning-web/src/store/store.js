import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import formReducer from "./formSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    form: formReducer,
  },
});
