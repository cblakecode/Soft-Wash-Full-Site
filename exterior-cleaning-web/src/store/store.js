import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import { authReducer } from "./loginSlice";

export * from "./loginSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
  },
});
