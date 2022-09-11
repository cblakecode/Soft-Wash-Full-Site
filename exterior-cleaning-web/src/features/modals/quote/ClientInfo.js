import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCloseQuote,
  nextActiveStep,
} from "../../../store/slices/quoteSlice";

const ClientInfo = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(nextActiveStep());
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
            variant="outlined"
            label="First"
            type="text"
            placeholder="ex. John"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Last"
            placeholder="ex. Doe"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Phone"
            placeholder="Enter Your Mobile Number"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            placeholder="Enter Your Email Address"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Property Address"
            placeholder="ex. 123 Cleaning St, Mount Pleasant"
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
