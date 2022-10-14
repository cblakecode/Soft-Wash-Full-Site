import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import contactReducer from "./slices/contactSlice";
import quoteReducer from "./slices/quoteSlice";
import snackReducer from "./slices/snackSlice";
import memberReducer from "./slices/memberSlice";
import authReducer from "./slices/authSlice";
import loggedInReducer from "./slices/loggedInSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    contact: contactReducer,
    quote: quoteReducer,
    snack: snackReducer,
    auth: authReducer,
    member: memberReducer,
    loggedIn: loggedInReducer,
  },
});

export default store;
