import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import contactReducer from "./slices/contactSlice";
import quoteReducer from "./slices/quoteSlice";
import snackReducer from "./slices/snackSlice";
import memberReducer from "./slices/memberSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    contact: contactReducer,
    quote: quoteReducer,
    snack: snackReducer,
<<<<<<< HEAD
    auth: authReducer,
    member: memberReducer,
    loggedIn: loggedInReducer,
=======
    member: memberReducer,
>>>>>>> parent of 9e5ab6d (refactored redux code and added ux for login)
  },
});

export default store;
