import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
// import DatePicker from "@mui/x-date-pickers-pro/DatePicker";
// import TimePicker from "@mui/x-date-pickers-pro/TimePicker";
// import LocalizationProvider from "@mui/x-date-pickers-pro/LocalizationProvider";
// import { AdapterMoment } from "@mui/x-date-pickers-pro/AdapterMoment";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCloseQuote,
  nextActiveStep,
  prevActiveStep,
  changePropertyValues,
} from "../../../store/slices/quoteSlice";

const PropertyInfo = () => {
  const { clientData } = useSelector((store) => store.quote);
  const { property } = clientData;
  const { squareFeet, siding, date, time, techQuote } = property;
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(nextActiveStep());
  };

  const handleChange = (e) => {
    dispatch(changePropertyValues({ [e.target.name]: e.target.value }));
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h4" textAlign="center">
          Property Info
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: { xs: "none", lg: "flex" }, justifyContent: "center" }}
      >
        <Typography textAlign="center" variant="p">
          A little information about the property.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          name="squareFeet"
          type="text"
          label="Square Feet"
          value={squareFeet}
          placeholder="min. 150 | max. 3000 (numbers only)"
          onChange={handleChange}
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
            max: "3000",
            min: "150",
          }}
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          select
          onChange={handleChange}
          label="Siding Material"
          name="siding"
          value={siding}
          required
        >
          <MenuItem value="vinyl">Vinyl</MenuItem>
          <MenuItem value="brick">Brick</MenuItem>
          <MenuItem value="stucco">Stucco</MenuItem>
          <MenuItem value="hardy plank">Hardy Plank</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12}>
        {/* <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label="Select Prefered Clean Date"
            name="date"
            value={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider> */}
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
        <Button variant="outlined" onClick={() => dispatch(handleCloseQuote())}>
          Close
        </Button>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}
      >
        <Button type="button" onClick={() => dispatch(prevActiveStep())}>
          Prev
        </Button>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default PropertyInfo;
