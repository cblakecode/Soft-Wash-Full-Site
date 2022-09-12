import React from "react";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCloseQuote,
  nextActiveStep,
  prevActiveStep,
  changePropertyValues,
  calculateQuote,
} from "../../../store/slices/quoteSlice";

const PropertyInfo = () => {
  const { clientData } = useSelector((store) => store.quote);
  const { property } = clientData;
  const { squareFeet, siding, date, time, techQuote } = property;
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(calculateQuote());
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
        <Input
          type="number"
          disableUnderline
          sx={{
            border: "0.5px solid grey",
            boxShadow: "none",
            p: "1rem",
            borderRadius: "4px",
          }}
          fullWidth
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
      <Grid item container>
        <Grid item xs={6}>
          <DatePicker
            label="Preferred Clean Date"
            renderInput={(params) => (
              <TextField {...params} required fullWidth />
            )}
            value={date}
            onChange={(newValue) => {
              dispatch(changePropertyValues({ date: newValue }));
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Preferred Clean Time Range"
            name="time"
            value={time}
            onChange={handleChange}
            select
            required
            fullWidth
          >
            <MenuItem value="8:00am-12:00pm">Morning (8am-12pm)</MenuItem>
            <MenuItem value="12:00pm-5:00pm">Afternoon (12pm-5pm)</MenuItem>
            <MenuItem value="8:00am-5:00pm">Anytime (8am-5pm)</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Additional items to be quoted on site by service tech"
          placeholder="ex. back patio, driveway, balcony, etc."
          name="techQuote"
          value={techQuote}
          onChange={handleChange}
          multiline
          rows={3}
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
