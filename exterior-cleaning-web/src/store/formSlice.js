import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  emailState: {
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  },
  formState: {
    error: null,
    isSent: "idle",
  },
};

let extraReducers;
const name = "form";
const formSlice = createSlice({
  name,
  initialState,
  reducers: {
    handleInputChange: (state, action) => {
      state.emailState = action.payload;
    },
    resetForm: (state, action) => {
      state.emailState.message = "";
    },
  },
  extraReducers,
});

const createExtraActions = () => {
  // const baseURL = `${process.env.REACT_APP_API_URL}/server`;

  return {
    sendEmail: sendEmail(),
  };

  function sendEmail() {
    return createAsyncThunk(
      `${name}/sendEmail`,
      async (action) =>
        await fetch("http://localhost:5000/send", {
          method: "POST",
          body: JSON.stringify(action),
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

const extraActions = createExtraActions();

const createExtraReducers = () => {
  return {
    ...sendEmail(),
  };

  function sendEmail() {
    let { pending, fulfilled, rejected } = extraActions.sendEmail;
    return {
      [pending]: (state) => {
        state.error = null;
      },
      [fulfilled]: (state, action) => {
        console.log("Message Successful");
        state.message = "";
      },
      [rejected]: (state, action) => {
        state.error = action.error;
      },
    };
  }
};
extraReducers = createExtraReducers();

export const inputActions = { ...formSlice.actions, ...extraActions };
export default formSlice.reducer;
