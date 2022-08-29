import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import inputReducer from "./formSlice";
export * from "./formSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    form: inputReducer,
  },
});
