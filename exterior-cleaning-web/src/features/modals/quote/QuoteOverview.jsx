import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import sendQuote from "../../../store/actions/sendQuote";
import {
  handleCloseQuote,
  prevActiveStep,
} from "../../../store/slices/quoteSlice";

const QuoteOverview = () => {
  const dispatch = useDispatch();
  const { totalPrice, clientData } = useSelector((store) => store.quote);
  const { property, personal } = clientData;
  const { date, time, techQuote } = property;
  const { firstName, lastName, email, mobile, address } = personal;

  return (
    <Grid container justifyContent="center" columnSpacing={2} rowSpacing={4}>
      <Grid item>
        <Typography variant="h4">Overview</Typography>
      </Grid>
      <Grid item container justifyContent="center">
        <Grid item xs={6} borderRight="1px solid">
          <Grid item xs={12}>
            <Typography
              borderBottom="1px solid"
              variant="h6"
              textAlign="center"
            >
              Personal
            </Typography>
          </Grid>
          <Grid item container spacing={2} sx={{ pt: "1rem" }}>
            <Grid item xs={6}>
              <Typography>Name:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{`${firstName} ${lastName}`}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Email:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{`${email}`}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Phone:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{`${mobile}`}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Address:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{`${address}`}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12}>
            <Typography
              borderBottom="1px solid"
              variant="h6"
              textAlign="center"
            >
              Property
            </Typography>
          </Grid>
          <Grid
            item
            container
            spacing={2}
            xs={12}
            sx={{ pl: "1rem", pt: "1rem" }}
          >
            <Grid item xs={6}>
              <Typography>Quote Price:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{`$${totalPrice}`}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Date/Time:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{`${moment(date).format(
                "MM DD YYYY"
              )} between ${time}`}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>On Site Quote:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                {!(techQuote === "")
                  ? techQuote
                  : "No Items To be Quoted On Site"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Button
          type="button"
          variant="outlined"
          endIcon={<CloseRoundedIcon />}
          onClick={() => dispatch(handleCloseQuote())}
        >
          Close
        </Button>
      </Grid>
      <Grid item container xs={6} justifyContent="flex-end">
        <Grid item>
          <Button
            type="button"
            size="large"
            onClick={() => dispatch(prevActiveStep(2))}
          >
            Back
          </Button>
        </Grid>
        <Grid item>
          <Button
            type="button"
            endIcon={<SendRoundedIcon />}
            variant="contained"
            onClick={() => dispatch(sendQuote({ ...personal, ...property }))}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuoteOverview;
