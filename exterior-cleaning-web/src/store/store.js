import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import modalReducer from "./slices/modalSlice";
import contactReducer from "./slices/contactSlice";
import quoteReducer from "./slices/quoteSlice";
import snackReducer from "./slices/snackSlice";
import memberReducer from "./slices/memberSlice";
import authReducer from "./slices/authSlice";
import scrollReducer from "./slices/scrollSlice";

const rehydrateState = () => {
  if (sessionStorage.getItem("userStorage") !== null) {
    return {
      user: JSON.parse(sessionStorage.getItem("userStorage")),
      isLogged: true,
    };
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
    scroll: scrollReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiSlice.middleware
    ),
  devTools: true,
  preloadedState: {
    auth: rehydrateState(),
  },
});

export default store;
