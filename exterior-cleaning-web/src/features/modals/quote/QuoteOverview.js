import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCloseQuote,
  sendQuote,
  prevActiveStep,
} from "../../../store/slices/quoteSlice";

const QuoteOverview = () => {
  const dispatch = useDispatch();
  const { totalPrice, clientData } = useSelector((store) => store.quote);
  const { property, personal } = clientData;
  const { date, time, techQuote } = property;
  const { fistName, LastName, email, mobile, address } = personal;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Grid container spacing={1}>
      <Grid container item xs={12}>
        <Typography variant="h4" textAlign="center">
          Overview
        </Typography>
      </Grid>
      <Grid item container>
        <Grid item xs={8}>
          <Typography variant="body1">Price for Mildew Removal:</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1" textAlign="right">
            ${totalPrice}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={8}>
          <Typography variant="body1">Items to be quoted on site:</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">{techQuote}</Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={7}>
          <Typography variant="body1">Date/Time Preferred:</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body1" textAlign="right">{`on ${moment(
            date
          ).format("MM Do YYYY")} at ${time}`}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined" onClick={() => dispatch(handleCloseQuote())}>
          Close
        </Button>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}
      >
        <Button type="button" onClick={() => dispatch(prevActiveStep(2))}>
          Back
        </Button>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Request
        </Button>
      </Grid>
    </Grid>
  );
};

export default QuoteOverview;
