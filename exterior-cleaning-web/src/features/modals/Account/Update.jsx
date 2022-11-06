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
  const { data: user } = useGetMemberQuery();
  const [userData, setUserData] = useState({ ...user, password: "" });
  const [updateMember] = useUpdateMemberMutation();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    // setData({ ...formData, [e.target.name]: e.target.value });
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    dispatch(toggleIsClosed());
    dispatch(originalData());
  };

  const handleSubmit = async (e) => {
    try {
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
            value={userData.username}
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
            value={userData.password}
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
