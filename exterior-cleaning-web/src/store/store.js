import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import contactReducer from "./slices/contactSlice";
import quoteReducer from "./slices/quoteSlice";
import snackReducer from "./slices/snackSlice";
import loginReducer from "./slices/loginSlice";
import signUpReducer from "./slices/signupSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    contact: contactReducer,
    quote: quoteReducer,
    snack: snackReducer,
    login: loginReducer,
    signup: signUpReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
