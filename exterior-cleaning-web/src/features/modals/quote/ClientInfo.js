import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCloseQuote,
  nextActiveStep,
  changePersonalValues,
} from "../../../store/slices/quoteSlice";

const ClientInfo = () => {
  const dispatch = useDispatch();
  const { clientData } = useSelector((store) => store.quote);
  const { personal } = clientData;
  const { firstName, lastName, email, mobile, address } = personal;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(nextActiveStep());
  };

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(changePersonalValues({ [e.target.name]: e.target.value }));
  };

  return (
    <FormControl>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h4" textAlign="center">
            Personal Info
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: { xs: "none", lg: "flex" }, justifyContent: "center" }}
        >
          <Typography variant="p">
            Fill out the form below and we will get back to you as soon as we
            can. Thank you for your business!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="First Name"
            name="firstName"
            value={firstName}
            type="text"
            placeholder="ex. John"
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Last Name"
            name="lastName"
            value={lastName}
            placeholder="ex. Doe"
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone"
            name="mobile"
            value={mobile}
            placeholder="Enter Your Mobile Number"
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={email}
            placeholder="Enter Your Email Address"
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Property Address"
            name="address"
            value={address}
            placeholder="ex. 123 Cleaning St, Mount Pleasant"
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            onClick={() => dispatch(handleCloseQuote())}
          >
            Close
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            Next
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default ClientInfo;
