import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import LoadingButton from "../../ui/LoadingButton";
import { useDispatch, useSelector } from "react-redux";
import { handleDataChange, toggleIsClosed, signUpOpen } from "../../../store/slices/memberSlice";
import { login } from "../../../store/actions/memberCRUD";



const Login = () => {
  const { memberData: { username, password } } = useSelector((store) => store.member);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(handleDataChange({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }))
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack direction="column" spacing={4}>
        <Typography variant="h4" textAlign="center">
          Login
        </Typography>
        <Typography variant="h5" color="initial" textAlign="center">
          Welcome Back!
        </Typography>
          <Stack spacing={5}>
            <TextField
              name="username"
              label="Enter Username"
              value={username}
              onChange={handleChange}
              required
            />
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
            <Typography textAlign="right" variant="subtitle2" sx={{mr: "4.5rem"}}>Not A Member Yet?</Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant="text" onClick={() => dispatch(toggleIsClosed())}>Close</Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button variant="outlined" type='button' onClick={() => dispatch(signUpOpen())} sx={{mr: "1rem"}}>Sign Up</Button>
            <LoadingButton name="Login" variant="contained" type="submit" />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Login;
