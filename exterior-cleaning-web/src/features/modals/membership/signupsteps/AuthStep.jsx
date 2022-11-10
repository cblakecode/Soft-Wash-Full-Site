import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LoadingButton from "../../../ui/LoadingButton";
import { loggedIn } from "../../../../store/slices/authSlice";
import { handleClose } from "../../../../store/slices/modalSlice";
import { prevStep, showPassword } from "../../../../store/slices/memberSlice";
import { useAddMemberMutation } from "../../../../store/api/authApiSlice";
import { setCredentials } from "../../../../store/slices/authSlice";
import { snackError, snackSuccess } from "../../../../store/slices/snackSlice";

const AuthStep = () => {
  const userRef = useRef();
  const [confirm, setConfirm] = useState("");
  const [addMember, { isLoading }] = useAddMemberMutation();
  const dispatch = useDispatch();
  const { togglePassView } = useSelector((store) => store.member);
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleUserChange = (e) => {
    dispatch(setCredentials({ [e.target.name]: e.target.value }));
  };

  const handleConfirmChange = (e) => {
    setConfirm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await addMember(user).unwrap();
      sessionStorage.setItem("authStorage", JSON.stringify(token));
      sessionStorage.setItem("userStorage", JSON.stringify(user));
      dispatch(snackSuccess("Successfully Sign Up"));
      dispatch(loggedIn());
      dispatch(handleClose());
      return;
    } catch (err) {
      if (!err?.status) {
        dispatch(snackError("server not responding"));
      } else if (err.status === 400) {
        dispatch(snackError("All Fields are Required"));
      } else if (err.status === 409) {
        dispatch(snackError("Username or Email already exists"));
      } else {
        dispatch(snackError("Sign Up Failed"));
      }
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" textAlign="center" sx={{ mb: "1rem" }}>
        Create Username and Password
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            label="Enter Username (must be 6-12 characters long)"
            name="username"
            ref={userRef}
            value={user?.username}
            inputProps={{ minLength: "6", maxLength: "12" }}
            onChange={handleUserChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Enter Password (must be 8-12 characters long. Cannot contain any special characters)"
            type={togglePassView ? "text" : "password"}
            name="password"
            ref={userRef}
            value={user?.password}
            onChange={handleUserChange}
            InputProps={{
              minLength: "8",
              maxLength: "12",
              pattern: "^\\w{8,12}$",
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => dispatch(showPassword())}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {togglePassView ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Confirm Password"
            name="confirmPass"
            type={togglePassView ? "text" : "password"}
            ref={userRef}
            value={confirm}
            onChange={handleConfirmChange}
            InputProps={{
              pattern: `^${user?.password}$`,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => dispatch(showPassword())}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {togglePassView ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ shrink: true }}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" onClick={() => dispatch(handleClose())}>
            Close
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="button" onClick={() => dispatch(prevStep())}>
            Prev
          </Button>
          <LoadingButton name="Sign In" disabled={isLoading} type="submit" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthStep;
