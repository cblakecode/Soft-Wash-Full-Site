import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleClose } from "../../../app/slices/modalSlice";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  selectUserResult,
  useUpdateMemberMutation,
} from "../../../app/api/memberApiSlice";
import { snackError, snackSuccess } from "../../../app/slices/snackSlice";

const Update = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((store) => store.auth.user);
  const user = useSelector((store) => selectUserResult(store, username));
  const [userData, setUserData] = useState({ ...user, password: "" });
  const [updateMember] = useUpdateMemberMutation();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleClosed = () => {
    dispatch(handleClose());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleClose();
      const response = await updateMember(userData).unwrap();
      handleClosed();
      dispatch(snackSuccess(response.message));
      return response;
    } catch (error) {
      if (error.status !== 403) {
        dispatch(snackError(error.data.message));
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" rowSpacing={2}>
        <Grid item xs={12}>
          <Typography textAlign="center" variant="h4">
            Edit Account
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="username"
            label="Username"
            value={userData.username}
            onChange={handleChange}
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Name"
            value={userData.name}
            fullWidth
            onChange={handleChange}
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            label="Email"
            value={userData.email}
            type="email"
            fullWidth
            onChange={handleChange}
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="phone"
            label="Phone Number"
            value={userData.phone}
            fullWidth
            onChange={handleChange}
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="address"
            label="Address"
            value={userData.address}
            fullWidth
            onChange={handleChange}
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle" sx={{ mb: "1rem" }} />
          <TextField
            name="password"
            label="Confirm Password"
            type="password"
            value={userData.password}
            onChange={handleChange}
            fullWidth
            required
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between">
            <Button onClick={handleClosed}>Close</Button>
            <Button variant="contained" type="submit">
              Update
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default Update;
