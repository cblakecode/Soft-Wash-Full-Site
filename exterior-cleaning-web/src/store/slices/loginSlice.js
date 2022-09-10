// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const extraActions = createExtraActions();
// const initialState = createInitialState();
// const reducers = createReducers();
// const extraReducers = createExtraReducers();
// const name = "auth";

// const loginSlice = createSlice({
//   name,
//   initialState,
//   reducers,
//   extraReducers,
// });

// export const authActions = { ...loginSlice.actions, ...extraActions };
// export const authReducer = loginSlice.reducer;

// const createInitialState = () => {
//   return {
//     user: JSON.parse(localStorage.getItem("user")),
//     error: null,
//   };
// };

// const createReducers = () => {
//   return {
//     logout,
//   };

//   function logout(state) {
//     state.user = null;
//     localStorage.removeItem("user");
//     history.navigate("/login");
//   }
// };

// const createExtraActions = () => {
//   const baseUrl = `${process.env.REACT_APP_API_URL}/users`;

//   return {
//     login: login(),
//   };

//   function login() {
//     return createAsyncThunk(
//       `${name}/login`,
//       async ({ username, password }) =>
//         await fetchWrapper.post(`${baseUrl}/authenticate`, {
//           username,
//           password,
//         })
//     );
//   }
// };

// const createExtraReducers = () => {
//   return {
//     ...login(),
//   };

//   function login() {
//     let { pending, fullfilled, rejected } = extraActions.login;
//     return {
//       [pending]: (state) => {
//         state.error = null;
//       },
//       [fullfilled]: (state, action) => {
//         const user = action.payload;

//         localStorage.setItem("user", JSON.stringify(user));
//         state.user = user;

//         const { from } = history.location.state || { from: { pathname: "/" } };
//         history.navigate(from);
//       },
//       [rejected]: (state, action) => {
//         state.error = action.error;
//       },
//     };
//   }
// };
