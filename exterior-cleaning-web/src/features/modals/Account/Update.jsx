import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleIsClosed } from "../../../store/slices/memberSlice";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { originalData } from "../../../store/slices/loggedInSlice";
import {
  useGetMemberQuery,
  useUpdateMemberMutation,
} from "../../../store/api/memberApiSlice";

const Update = () => {
  const [formData, setData] = useState({});
  const { data: user } = useGetMemberQuery();
  const [updateMember] = useUpdateMemberMutation();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({ ...formData, [e.target.name]: e.target.value });
    console.log({ ...user, ...formData });
  };

  const handleClose = () => {
    dispatch(toggleIsClosed());
    dispatch(originalData());
  };

  const handleSubmit = async (e) => {
    try {
      const userData = { ...formData, ...user };
      console.log(userData);
      const response = await updateMember(userData).unwrap();
      return response;
    } catch (error) {
      console.log(error);
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
            value={formData.username}
            onChange={handleChange}
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="password"
            label="Confirm Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            fullWidth
            onChange={handleChange}
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            label="Email"
            value={formData.email}
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
            value={formData.phone}
            fullWidth
            onChange={handleChange}
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="address"
            label="Address"
            value={formData.address}
            fullWidth
            onChange={handleChange}
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between">
            <Button onClick={handleClose}>Close</Button>
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
