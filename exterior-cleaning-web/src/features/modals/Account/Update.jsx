import { apiSlice } from "../../../store/api/apiSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleClose } from "../../../store/slices/modalSlice";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { originalData } from "../../../store/slices/loggedInSlice";
import {
  // useGetMemberQuery,
  useUpdateMemberMutation,
} from "../../../store/api/memberApiSlice";

const Update = () => {
  const dispatch = useDispatch();
  const { currentData: user } = apiSlice.endpoints.getMember.useQueryState();
  const [userData, setUserData] = useState({ ...user, password: "" });
  const [updateMember] = useUpdateMemberMutation();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleClosed = () => {
    dispatch(handleClose());
    dispatch(originalData());
  };

  const handleSubmit = async (e) => {
    try {
      sessionStorage.setItem("userStorage", JSON.stringify(userData));
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
