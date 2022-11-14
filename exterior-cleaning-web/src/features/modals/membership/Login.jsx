import { useRef, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import LoadingButton from "../../ui/LoadingButton";
import { useDispatch } from "react-redux";
import { handleClose } from "../../../app/slices/modalSlice";
import { useLoginMutation } from "../../../app/api/authApiSlice";
import { snackError, snackSuccess } from "../../../app/slices/snackSlice";
import { setCredentials } from "../../../app/slices/authSlice";
import { toggleLogin } from "../../../app/slices/modalSlice";

const Login = () => {
  const userRef = useRef();
  const [username, setUser] = useState("");
  const [password, setPwd] = useState("");

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ username, password }).unwrap();
      dispatch(setCredentials({ username }));
      setUser("");
      setPwd("");
      dispatch(handleClose());
      dispatch(snackSuccess("Welcome Back!"));
    } catch (err) {
      dispatch(snackError(err.data.message));
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);
  const handlePwdInput = (e) => setPwd(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
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
            ref={userRef}
            value={username}
            onChange={handleUserInput}
            autoComplete="off"
            required
          />
          <TextField
            type="password"
            name="password"
            ref={userRef}
            label="Enter Password"
            value={password}
            onChange={handlePwdInput}
            autoComplete="off"
            required
          />
        </Stack>
        <Grid container rowSpacing={1}>
          <Grid item xs={12}>
            <Typography
              textAlign="right"
              variant="subtitle2"
              sx={{ mr: "4.5rem" }}
            >
              Not A Member Yet?
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant="text" onClick={() => dispatch(handleClose())}>
              Close
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              variant="outlined"
              type="button"
              onClick={() => dispatch(toggleLogin())}
              sx={{ mr: "1rem" }}
            >
              Sign Up
            </Button>
            <LoadingButton name="Login" disabled={isLoading} type="submit" />
          </Grid>
        </Grid>
      </Stack>
    </form>
  );
};

export default Login;
