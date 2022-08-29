import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  mobile: "",
  message: "",
};
const name = "form";
const extraActions = createExtraActions();
const formSlice = createSlice({
  name,
  initialState,
  reducers: {
    handleInputChange: (state, action) => {
      state = action.payload;
    },
  },
});

export const { handleInputChange } = formSlice.actions;
export const inputActions = { ...formSlice.actions, ...extraActions };
export default formSlice.reducer;

const createExtraActions = () => {
  const baseURL = `${process.env.REACT_APP_API_URL}/email`;

  return {
    sendEmail: sendEmail(),
  };

  function sendEmail() {
    return createAsyncThunk(
      `${name}/sendEmail`,
      async ({ ...state }) =>
        await fetch(`${baseURL}/send`, {
          method: "POST",
          body: JSON.stringify(state),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((response) => {
            if (response.status === "success") {
              alert("Message Sent.");
              this.resetForm();
            } else if (response.status === "fail") {
              alert("Message failed to send.");
            }
          })
    );
  }
};
