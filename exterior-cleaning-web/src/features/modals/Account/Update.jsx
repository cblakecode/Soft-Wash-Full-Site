import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsClosed } from "../../../store/slices/memberSlice";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { changeData, originalData } from "../../../store/slices/loggedInSlice";

const Update = () => {
  const [data, setData] = useState({});
  const [confirm, setConfirm] = useState(false);

  const { persistedData } = useSelector((store) => store.loggedIn);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    dispatch(toggleIsClosed());
    dispatch(originalData());
  };

  const handleSubmit = async (e) => {
    if (!confirm) {
      setConfirm(true);
      return;
    }
    await dispatch(changeData(data));
  };

  return (
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
          defaultValue={persistedData.username}
          onChange={handleChange}
          fullWidth
          autoComplete="off"
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="password"
          label="Change Password"
          onChange={handleChange}
          fullWidth
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="name"
          label="Name"
          fullWidth
          defaultValue={persistedData.name}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="email"
          label="Email"
          type="email"
          fullWidth
          defaultValue={persistedData.email}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="phone"
          label="Phone Number"
          fullWidth
          defaultValue={persistedData.phone}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="address"
          label="Address"
          fullWidth
          defaultValue={persistedData.address}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </Grid>
      {confirm && (
        <Grid item xs={12}>
          <TextField
            name="password"
            label="Confirm Current Password"
            type="password"
            onChange={handleChange}
            fullWidth
            required
            inputProps={{ pattern: /\w/ }}
          />
        </Grid>
      )}
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between">
          <Button onClick={handleClose}>Close</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Update
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Update;
