import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { changeLoginData, closeMember, toggleLogin } from "../../../store/slices/loginSlice";
import { toggleSignUp } from "../../../store/slices/signupSlice";

const Login = () => {
  const {
    loginFormData: { email_user, password },
  } = useSelector((store) => store.login);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeLoginData({ [e.target.name]: e.target.value }));
  };

  const handleSignUp = () => {
    dispatch(toggleSignUp());
    dispatch(toggleLogin());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack direction="column" spacing={4}>
        <Typography variant="h4" textAlign="center">
          Welcome Back!
        </Typography>
        <Stack spacing={1}>
          <Typography>Email/Username</Typography>
          <TextField
            name="email_user"
            label="Enter Username or Email"
            value={email_user}
            onChange={handleChange}
            required
          />
        </Stack>
        <Stack spacing={1}>
          <Typography>Password</Typography>
          <TextField
            type="password"
            name="password"
            label="Enter Password"
            value={password}
            onChange={handleChange}
            required
          />
        </Stack>
        <Grid container rowSpacing={1}>
          <Grid item xs={12}>
            <Typography textAlign="left" variant="subtitle2">Not A Member Yet?</Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" onClick={handleSignUp}>Sign Up</Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button variant="text" onClick={() => dispatch(closeMember())}>Close</Button>
            <Button variant="contained" type="submit">Login</Button>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Login;
