import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import contactReducer from "./slices/contactSlice";
import quoteReducer from "./slices/quoteSlice";
import snackReducer from "./slices/snackSlice";
import memberReducer from "./slices/memberSlice";
import loggedInReducer from "./slices/loggedInSlice";
import authReducer from "./slices/authSlice";
import avatarReducer from "./slices/avatarSlice";

const rehydrateState = () => {
  if (localStorage.getItem("userStorage") !== null) {
    return JSON.parse(localStorage.getItem("userStorage"));
  }
};

const store = configureStore({
  reducer: {
    modal: modalReducer,
    contact: contactReducer,
    quote: quoteReducer,
    snack: snackReducer,
    auth: authReducer,
    member: memberReducer,
    avatar: avatarReducer,
    loggedIn: loggedInReducer,
  },
  preloadedState: {
    loggedIn: rehydrateState(),
  },
});

export default store;
