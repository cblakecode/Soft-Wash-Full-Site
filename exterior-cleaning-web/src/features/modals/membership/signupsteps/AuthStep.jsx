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
import {
  toggleIsClosed,
  prevStep,
  handleConfirmChange,
  showPassword,
} from "../../../../store/slices/memberSlice";
import { useAddMemberMutation } from "../../../../store/api/authApiSlice";
import { setCredentials } from "../../../../store/slices/authSlice";
import { snackError, snackSuccess } from "../../../../store/slices/snackSlice";

const AuthStep = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState({});
  const [errMsg, setErrMsg] = useState("");
  const [addMember, { isLoading }] = useAddMemberMutation();
  const dispatch = useDispatch();
  const { togglePassView } = useSelector((store) => store.member);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    dispatch(toggleIsClosed());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUser = await addMember(user).unwrap();
      dispatch(setCredentials({ ...newUser, user: { ...user } }));
      setUser({});
      dispatch(snackSuccess("Successfully Sign Up"));
    } catch (err) {
      if (!err?.originalStatus) {
        setErrMsg("server not responding");
      } else if (err.originalStatus === 400) {
        setErrMsg("All Fields are Required");
      } else if (err.originalStatus === 409) {
        setErrMsg("Username or Email already exists");
      } else {
        setErrMsg("Sign Up Failed");
      }
      errRef.current.focus();
      dispatch(snackError(errMsg));
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
            value={user.username}
            inputProps={{ minLength: "6", maxLength: "12" }}
            onChange={handleChange}
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
            value={user.password}
            onChange={handleChange}
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
            value={user.confirmPass}
            onChange={(e) => dispatch(handleConfirmChange(e.value))}
            InputProps={{
              pattern: `^${user.password}$`,
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
          <Button variant="outlined" onClick={handleClose}>
            Close
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="button" onClick={() => dispatch(prevStep())}>
            Prev
          </Button>
          <LoadingButton
            name="Sign In"
            loading={isLoading}
            props={{ variant: "contained", type: "submit" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthStep;
