import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import modalReducer from "./slices/modalSlice";
import contactReducer from "./slices/contactSlice";
import quoteReducer from "./slices/quoteSlice";
import snackReducer from "./slices/snackSlice";
import memberReducer from "./slices/memberSlice";
import loggedInReducer from "./slices/loggedInSlice";
import authReducer from "./slices/authSlice";

const rehydrateState = () => {
  if (localStorage.getItem("userStorage") !== null) {
    return JSON.parse(localStorage.getItem("userStorage"));
  }
};

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    modal: modalReducer,
    contact: contactReducer,
    quote: quoteReducer,
    snack: snackReducer,
    auth: authReducer,
    member: memberReducer,
    loggedIn: loggedInReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
  preloadedState: {
    loggedIn: rehydrateState(),
  },
});

export default store;
