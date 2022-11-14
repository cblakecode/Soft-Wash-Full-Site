import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { nextStep } from "../../../../app/slices/memberSlice";
import { setCredentials } from "../../../../app/slices/authSlice";
import { toggleLogin, handleClose } from "../../../../app/slices/modalSlice";

const PersonalStep = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    dispatch(toggleLogin());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCredentials(user));
    dispatch(nextStep());
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h3" textAlign="center" sx={{ mb: "1rem" }}>
        Sign Up
      </Typography>
      <Typography variant="h5" textAlign="center">
        Please fill out form below
      </Typography>
      <Stack spacing={4} sx={{ mt: "1rem" }}>
        <TextField
          required
          name="name"
          label="Enter First and Last Name"
          autoComplete="off"
          value={user?.name}
          onChange={handleChange}
          inputProps={{ pattern: "^\\D+\\s\\D+$" }}
        />
        <TextField
          required
          name="phone"
          placeholder="ex. 1234567891"
          inputProps={{
            pattern: "^\\(?(\\d{3})\\)?[- ]?(\\d{3})[- ]?(\\d{4})$",
          }}
          label="Enter Mobile Number"
          autoComplete="off"
          value={user?.phone}
          onChange={handleChange}
        />
        <TextField
          required
          name="email"
          type="email"
          label="Enter Valid Email"
          autoComplete="off"
          value={user?.email}
          onChange={handleChange}
        />
        <TextField
          required
          name="address"
          label="Enter Property Address (ex. 123 Cleaning st, Mount Pleasant 29486)"
          autoComplete="off"
          value={user?.address}
          onChange={handleChange}
          inputProps={{ pattern: "^\\d+\\s\\w+[, ]\\D+\\s\\d{5,6}$" }}
        />
        <Grid container>
          <Grid item xs={6}>
            <Button variant="text" onClick={() => dispatch(handleClose())}>
              Close
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              columnGap: "1rem",
            }}
          >
            <Button variant="outlined" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="contained" type="submit">
              Next
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default PersonalStep;
